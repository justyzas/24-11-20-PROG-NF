import express from "express";
import { generateRandomProfile } from "../lib/utils/generate";
import Profile from "../models/Profile.model";

const router = express.Router();

// profile creation
router.post("/:userId", async (req, res) => {
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
router.get("/:profileId", async (req, res) => {
	const profile = await Profile.findByPk(req.params.profileId);
	if (!profile) return res.status(404).json({ message: "Not found!" });
	res.json(profile);
});

export default router;
