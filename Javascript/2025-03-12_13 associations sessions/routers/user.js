import express from "express";
import { generateRandomUser } from "../lib/utils/generate";
import User from "../models/User.model";
import Profile from "../models/Profile.model";
import Post from "../models/Post.model";

const router = express.Router();

// user creation
router.post("/", async (req, res) => {
	// const userData = req.body;
	const userData = generateRandomUser();
	const newUser = await User.create(userData);
	res.send(newUser);
});

// getting user
router.get("/:id", async (req, res) => {
	const id = req.params.id;

	const includeArray = [];
	const { includeProfile, includePosts } = req.query;

	if (includeProfile && includeProfile === "true")
		includeArray.push({
			model: Profile,
			attributes: ["firstName", "lastName"],
		});

	if (includePosts && includePosts === "true")
		includeArray.push({
			model: Post,
			attributes: {
				exclude: ["userId"],
			},
		});

	const user = await User.findByPk(id, {
		include: includeArray,
	});
	if (!user) return res.status(404).json({ message: "nerastas" });
	res.json(user);
});

export default router;
