import express from "express";
import Post from "../models/Post.model";

const router = express.Router();

// post creation
router.post("/:userId", async (req, res) => {
	try {
		const userId = req.params.userId;
		const postData = generateRandomPost();

		const newPost = await Post.create({ ...postData, userId });

		res.json({ message: "Post was created successfully", post: newPost });
	} catch (err) {
		res
			.status(404)
			.json({ message: "Post was not created, because user was not found" });
	}
});

//getting post
router.get("/:postId", async (req, res) => {
	const postId = req.params.postId;

	const post = await Post.findByPk(postId);
	if (!post)
		return res
			.status(404)
			.json({ message: `Post was not found using id: ${postId}` });

	res.json(post);
});

export default router;
