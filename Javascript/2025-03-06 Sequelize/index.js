import express from "express";
import User from "./models/user.model.js";

const app = express();
app.use(express.json());

app.get("/users", async (_, res) => {
	const allUsers = await User.findAll({ raw: true });
	res.status(200).json(allUsers);
});
app.get("/users/:id", async (req, res) => {
	const user = await User.findOne({
		where: {
			id: req.params.id,
		},
		raw: true,
	});
	if (user == null)
		return res
			.status(404)
			.json({ message: `Naudotojas pagal id ${req.params.id} buvo nerastas` });
	// const allUsers = await User.findAll({ raw: true });
	res.status(200).json(user);
});

app.post("/users", async (req, res) => {
	// Kai tikimės kad įvyks klaida try bloke, galime tą klaidą apdoroti catch bloke
	try {
		const user = await User.create(req.body);
		res.send(user.toJSON());
	} catch (error) {
		return res.status(400).send({ message: error.message });
	}
});

app.listen(3000, () => {
	console.log("Serveris sėkmingai paleistas. Adresas: http://localhost:3000");
});
