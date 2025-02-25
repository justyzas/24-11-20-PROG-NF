import express from "express";
import cors from "cors";
import fs from "node:fs/promises";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/produktai", async (req, res) => {
	const productsDataEncoded = await fs.readFile("./data/products.json");
	const productsData = JSON.parse(productsDataEncoded);
	const visiProduktai = productsData.allProducts;
	res.status(200).send(visiProduktai);
});

app.get("/produktai/:id", async (req, res) => {
	const id = req.params.id;

	if (isNaN(id)) {
		return res.status(400).send({
			message:
				"ID buvo nepateiktas arba nėra tinkamo formato (turi būti skaičius).",
		});
	}

	const productsDataEncoded = await fs.readFile("./data/products.json");
	const productsData = JSON.parse(productsDataEncoded);
	const visiProduktai = productsData.allProducts;

	const konkretusProduktas = visiProduktai.find(
		(produktas) => produktas.id == id
	); //undefined/Product
	if (!konkretusProduktas)
		return res.status(404).send({
			message: "Produktas su pateiktu ID buvo nerastas.",
		});
	res.status(200).send(konkretusProduktas);
});

app.post("/produktai", async (req, res) => {
	const naujasProduktas = req.body;
	if (!naujasProduktas.title)
		return res.status(400).send({
			message: "Produktas negalėjo būti sukurtas. Nepateiktas laukelis 'title'",
		});
	if (!naujasProduktas.price)
		return res.status(400).send({
			message: "Produktas negalėjo būti sukurtas. Nepateiktas laukelis 'price'",
		});
	if (!naujasProduktas.description)
		return res.status(400).send({
			message:
				"Produktas negalėjo būti sukurtas. Nepateiktas laukelis 'description'",
		});
	if (typeof naujasProduktas.title !== "string") {
		return res.status(400).send({
			message:
				"Produktas negalėjo būti sukurtas. Laukelis 'title' buvo ne tekstas",
		});
	}
	if (typeof naujasProduktas.price !== "number") {
		return res.status(400).send({
			message:
				"Produktas negalėjo būti sukurtas. Laukelis 'price' buvo ne skaičius",
		});
	}
	if (typeof naujasProduktas.description !== "string") {
		return res.status(400).send({
			message:
				"Produktas negalėjo būti sukurtas. Laukelis 'description' buvo ne tekstas",
		});
	}
	if (naujasProduktas.price <= 0) {
		return res.status(400).send({
			message:
				"Produktas negalėjo būti sukurtas. Laukelis 'price' negali būti mažesnis nei 0.01",
		});
	}
	const productsDataEncoded = await fs.readFile("./data/products.json");
	const productsData = JSON.parse(productsDataEncoded);

	naujasProduktas.id = productsData.currentId;
	productsData.currentId++;
	productsData.allProducts.push(naujasProduktas);

	res.status(201).send({
		message: "Produktas buvo sėkmingai sukurtas",
		data: naujasProduktas,
	});

	await fs.writeFile("./data/products.json", JSON.stringify(productsData));
});

app.delete("/produktai/:id", async (req, res) => {
	const id = req.params.id;
	if (isNaN(id)) {
		return res.status(400).send({
			message:
				"ID buvo nepateiktas arba nėra tinkamo formato (turi būti skaičius).",
		});
	}
	const productsDataEncoded = await fs.readFile("./data/products.json");
	const productsData = JSON.parse(productsDataEncoded);

	const productIndex = productsData.allProducts.findIndex(
		(produktas) => produktas.id == id
	);
	if (productIndex === -1) {
		return res.status(404).send({ message: "Trinamas produktas nerastas" });
	}
	productsData.allProducts.splice(productIndex, 1);

	res
		.status(200)
		.send({ message: `Sėkmingai ištrintas produktas su id ${id}` });
	await fs.writeFile("./data/products.json", JSON.stringify(productsData));
});

app.put("/produktai/:id", async (req, res) => {
	const id = req.params.id;
	if (isNaN(id)) {
		return res.status(400).send({
			message:
				"ID buvo nepateiktas arba nėra tinkamo formato (turi būti skaičius).",
		});
	}
	const produktoNaujinamiDuomenys = req.body;
	if (
		!(
			produktoNaujinamiDuomenys.title ||
			produktoNaujinamiDuomenys.price ||
			produktoNaujinamiDuomenys.description
		)
	)
		return res.status(400).send({
			message:
				"Produkto duomenys nebus atnaujinti, kadangi nebuvo pateiktas nei vienas iš šių laukelių: title, price, description",
		});
	if (
		produktoNaujinamiDuomenys.price &&
		(isNaN(produktoNaujinamiDuomenys.price) ||
			produktoNaujinamiDuomenys.price <= 0)
	) {
		return res.status(400).send({
			message:
				"Produkto atnaujinama kaina buvo pateikta neteisingu formatu arba buvo mažesnė nei 0.01",
		});
	}
	const productsDataEncoded = await fs.readFile("./data/products.json");
	const productsData = JSON.parse(productsDataEncoded);

	const productIndex = productsData.allProducts.findIndex(
		(produktas) => produktas.id == id
	);
	if (productIndex === -1) {
		return res.status(404).send({ message: "Atnaujinamas produktas nerastas" });
	}

	if (produktoNaujinamiDuomenys.title)
		productsData.allProducts[productIndex].title =
			produktoNaujinamiDuomenys.title;
	if (produktoNaujinamiDuomenys.price)
		productsData.allProducts[productIndex].price =
			produktoNaujinamiDuomenys.price;
	if (produktoNaujinamiDuomenys.description)
		productsData.allProducts[productIndex].description =
			produktoNaujinamiDuomenys.description;
	res.status(200).send({
		message: "Duomenys sėkmingai atnaujinti",
		data: productsData.allProducts[productIndex],
	});
	await fs.writeFile("./data/products.json", JSON.stringify(productsData));
});

// HTTP - 80
// Hypertext transfer protocol
// HTTPS - 465
// Hypertext transfer protocol secure
app.listen(80, function () {
	console.log("CORS-enabled web server listening on port 80");
});
