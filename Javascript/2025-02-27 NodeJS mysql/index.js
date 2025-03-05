import express from "express";
import cors from "cors";
import connection from "./mysql-connect.js";
// Validacijos biblioteka zod
import z from "zod";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3069, () => {
	console.log("Express aplikacija sėkmingai paleista. http://localhost:3069");
});

// Validacijos reikalavimai nustatomi kuriant validacijos schemą.
const productSchema = z.object({
	title: z
		.string()
		.trim()
		.min(3, {
			message: "Produkto pavadinimas negali būti trumpesnis nei 3 simboliai",
		})
		.max(255),
	price: z
		.number()
		.min(0.1, { message: "Kaina turi būti didesnė nei 0.10€" })
		.max(999999.99, { message: "Kaina negali būti didesnė nei 1M" }),
	description: z.string().max(3000),
});

// Visų produktų gavimas
app.get("/products", async (req, res) => {
	const [data] = await connection.query("SELECT * FROM products");
	res.status(200).send(data);
});

// Vieno produkto gavimas
app.get("/products/:id", async (req, res) => {
	const id = req.params.id;

	const [data] = await connection.query(`SELECT * FROM products WHERE id=?`, [
		id,
	]);
	if (data.length > 0) return res.send(data[0]);

	res.status(404).send({ message: "Product was not found" });
});

// Vieno produkto pridėjimas
app.post("/products", async (req, res) => {
	const newProductData = req.body;
	// Validacijos schemos panaudojimas validuojant.
	const validationResult = productSchema.safeParse(newProductData);
	if (!validationResult.success)
		return res.status(400).json({
			message: "Duomenys nepraėjo validacijos",
			issues: validationResult.error.issues,
		});

	const data = await connection.query(
		`INSERT INTO products (price, title, description)
		    VALUES(?, ?, ?)`,
		[newProductData.price, newProductData.title, newProductData.description]
	);
	console.log(data);
	res.status(200).send({ message: "Duomenys sėkmingai pridėti prie DB" });
});
// Vieno produkto ištrynimas
app.delete("/products/:id", async (req, res) => {
	const id = req.params.id;
	const data = await connection.query("DELETE FROM products WHERE id = ?", id);
	if (data[0].affectedRows === 0)
		return res.status(404).json({ message: "Produktas buvo nerastas" });

	// TODO: Validuoti ar tikrai buvo ištrintas įrašas
	res.status(200).send({ message: "Duomenys sėkmingai ištrinti" });
});

// Vieno produkto atnaujinimas
app.put("/products/:id", async (req, res) => {
	const productUpdateSchema = productSchema.partial();
	const id = req.params.id;

	const newProductData = req.body;
	const validationResult = productUpdateSchema.safeParse(newProductData);

	if (!validationResult.success)
		return res.status(400).send({
			message: "Pateikti duomenys nepraėjo validacijos",
			issues: validationResult.error.issues,
		});

	const keys = Object.keys(newProductData);

	const querySegments = keys
		.map((key) => {
			return `${key}='${newProductData[key]}'`;
		})
		.join(", ");
	console.log(`UPDATE products SET ${querySegments} WHERE id=?`);
	const data = await connection.query(
		`UPDATE products SET ${querySegments} WHERE id=?`,
		[id]
	);
	if (data[0].changedRows == 0)
		return res.status(404).send({ message: "Produktas nerastas" });
	res.status(200).send({ message: "Sėkmingai paredaguotas produktas" });
});
