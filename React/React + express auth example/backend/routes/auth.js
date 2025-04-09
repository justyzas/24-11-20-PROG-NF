import express from "express";
import db from "../config/connect-mysql.js";
import { generateSalt, hashPassword } from "../lib/security.js";
import { createUser } from "../model/user.model.js";

const router = express.Router();

// /api/auth/login

router.post("/register", async (req, res) => {
	try {
		// firstName, lastName, email, password

		console.log(req.body);
		//Duomenų validacijos iš req.body

		//Patikrinti ar toks naudotojas su tokiu el.p.adresu jau egzistuoja duomenų bazėje

		// JEI TAIP:
		// Neleidžiame registruotis, pateikiame atsakymą 403

		//JEI NE:
		const salt = generateSalt();
		const hashedPassword = hashPassword(req.body.password, salt);
		const user = { ...req.body, salt, password: hashedPassword };
		const [result] = await createUser(user);
		console.log("😊:");
		console.log(user);
		res.status(200).send({
			message: "✅ Registration was successful!",
			user: { ...user, id: result.insertId },
		});
	} catch (err) {
		res.status(500).json({ message: "Internal server error occured" });
	}
});

router.post("/login", async (req, res) => {
	// email, password

	res.status(200).send({ message: "✅ Login route is working!" });
});

export default router;
