import express from "express";
import UserRouter from "./routers/user.router.js";
import BankRouter from "./routers/bank.router.js";
const app = express();
app.use(express.json());

app.use("/users", UserRouter);
app.use("/bank", BankRouter);

app.listen(3000, () => {
	console.log("Serveris pasileido: http://localhost:3000");
});
