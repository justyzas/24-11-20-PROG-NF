import express from "express";
import sequelize from "./setup/setup-sequelize.js";
import "./models/index.js";
import User from "./models/User.model.js";
import {
	generateRandomProfile,
	generateRandomUser,
} from "./lib/utils/generate.js";
import Profile from "./models/Profile.model.js";

const app = express();
app.use(express.json());

// user creation
app.post("/user", async (req, res) => {
	// const userData = req.body;
	const userData = generateRandomUser();
	const newUser = await User.create(userData);
	res.send(newUser);
});

// getting user
app.get("/user/:id", async (req, res) => {
	const id = req.params.id;
	const user = await User.findByPk(id, {
		include: [Profile],
	});
	if (!user) return res.status(404).json({ message: "nerastas" });
	res.json(user);
});

// profile creation
app.post("/profile/:userId", async (req, res) => {
	//1. malformed ID
	//2. useris neegzistuoja
	try {
		const id = req.params.userId;
		const profileData = generateRandomProfile();
		const newProfile = await Profile.create({
			...profileData,
			userId: id,
		});
		res.json(newProfile);
	} catch (err) {
		res.status(400).json({ message: "No such user or id is malformed" });
	}
});

// getting profile
app.get("/profile/:profileId", async (req, res) => {
	const profile = await Profile.findByPk(req.params.profileId);
	if (!profile) return res.status(404).json({ message: "Not found!" });
	res.json(profile);
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
