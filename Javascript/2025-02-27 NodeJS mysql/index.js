import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3069, () => {
	console.log("Express aplikacija sėkmingai paleista. http://localhost:3069");
});

// Visų produktų gavimas
app.get("/products", async (req, res) => {});

// Vieno produkto gavimas
app.get("/products/:id", async (req, res) => {
	const id = req.params.id;
});
// Vieno produkto pridėjimas
app.post("/products", async (req, res) => {
	const newProductData = req.body;
});
// Vieno produkto ištrynimas
app.delete("/products/:id", async (req, res) => {
	const id = req.params.id;
});
// Vieno produkto atnaujinimas
app.put("/products/:id", async (req, res) => {
	const id = req.params.id;
	const newProductData = req.body;
});
