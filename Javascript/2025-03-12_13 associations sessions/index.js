import express from "express";
import sequelize from "./setup/setup-sequelize.js";
import "./models/index.js";

import { generateRandomBook } from "./lib/utils/generate.js";
import Book from "./models/Book.model.js";
import Author from "./models/Author.model.js";
import { AuthorBooks } from "./models/assocations.js";
import userRouter from "./routers/user.js";
import profileRouter from "./routers/profile.js";
import postRouter from "./routers/post.js";
import authorRouter from "./routers/author.js";

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/profile", profileRouter);
app.use("/post", postRouter);
app.use("/author", authorRouter);

// book creation
app.post("/book", async (req, res) => {
	const bookData = generateRandomBook();
	const newBook = await Book.create(bookData);

	const author1 = await Author.findByPk(5);
	await newBook.addAuthor(author1);

	const author2 = await Author.findByPk(6);
	await newBook.addAuthor(author2);

	const author3 = await Author.findByPk(7);
	await newBook.addAuthor(author3);

	res.json(newBook);
});

// getting book by its id
app.get("/book/:bookId", async (req, res) => {
	const bookId = req.params.bookId;
	const book = await Book.findByPk(bookId, {
		include: [Author],
	});

	res.json(book);
});

// creating relations between authors and books
app.post("/link-author-book", async (req, res) => {
	const relations = req.body;
	await AuthorBooks.bulkCreate(relations);

	res.json({ message: "Author and book was successfully joined" });
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
