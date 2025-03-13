import express from "express";
import Author from "../models/Author.model";
import Book from "../models/Book.model";

const router = express.Router();
// author creation
router.post("/", async (req, res) => {
	const authorData = generateRandomAuthor();
	const newAuthor = await Author.create(authorData);
	res.json(newAuthor);
});

// getting author by id
router.get("/:authorId", async (req, res) => {
	const authorId = req.params.authorId;
	const author = await Author.findByPk(authorId, {
		include: [Book],
	});

	res.json(author);
});

export default router;
