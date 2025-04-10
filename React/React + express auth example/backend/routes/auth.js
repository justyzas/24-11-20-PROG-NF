import express from "express";
import db from "../config/connect-mysql.js";
import {
	generateSalt,
	hashPassword,
	isValidCredentials,
} from "../lib/security.js";
import { createUser, getUserByEmail } from "../model/user.model.js";
import registrationSchema from "../lib/validations/register.js";
import loginSchema from "../lib/validations/login.js";
import { ZodError } from "zod";
const router = express.Router();

// /api/auth/login

router.post("/register", async (req, res) => {
	console.log("/api/auth/registration");
	try {
		registrationSchema.parse(req.body); // Validuojame

		const salt = generateSalt();
		const hashedPassword = hashPassword(req.body.password, salt);
		const user = { ...req.body, salt, password: hashedPassword };

		const userFromDb = await createUser(user);

		// req.session.user = {
		// 	id: user.id,
		// 	email: user.email,
		// 	firstName: user.firstName,
		// 	lastName: user.lastName,
		// 	isLoggedIn: true,
		// };

		res.status(200).send({
			message: "✅ Registration was successful!",
			user: { ...userFromDb, password: undefined, salt: undefined },
		});
	} catch (err) {
		if (err instanceof ZodError)
			return res.status(400).json({
				message: "Įvyko validacijos klaida",
				validationMessage: err.issues[0].message,
			});
		if (err instanceof Error && err.code === "ER_DUP_ENTRY") {
			return res.status(409).json({
				message:
					"Įvyko įterpimo klaida - naudotojas su tokiu elektroniniu paštu jau yra užregistruotas",
			});
		}
		console.log(err);
		res.status(500).json({ message: "Internal server error occured" });
	}
});

router.post("/login", async (req, res) => {
	console.log("/api/auth/login");
	try {
		const { email, password } = req.body;
		loginSchema.parse(req.body);
		const user = await getUserByEmail(email);

		if (!isValidCredentials(password, user.salt, user.password))
			return res
				.status(403)
				.json({ message: "Pateiktas slaptažodis neatitiko" });

		req.session.user = {
			id: user.id,
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			isLoggedIn: true,
		};

		res.status(200).send({ message: "Prisijungimas buvo sėkmingas" });
	} catch (err) {
		if (err instanceof ZodError)
			return res.status(400).json({
				message: "Įvyko validacijos klaida",
				validationMessage: err.issues[0].message,
			});
		if (err instanceof Error && err.code === "ER_DUP_ENTRY") {
			return res.status(409).json({
				message:
					"Įvyko įterpimo klaida - naudotojas su tokiu elektroniniu paštu jau yra užregistruotas",
			});
		}
		if (err instanceof Error && err.cause === "NOT_FOUND")
			return res
				.status(400)
				.json({ message: "Prisijungimo duomenys yra neteisingi!" });
		console.log(err);
		res.status(500).json({ message: "Internal server error occured" });
	}
});

router.get("/logout", (req, res) => {
	console.log("/api/auth/logout");
	try {
		req.session.destroy();
		res.status(200).json({ message: "Sėkmingai atsijungėte nuo sistemos" });
	} catch (err) {
		res.status(403).json({
			message:
				"Pirmiausia turite būti prisijungę, kad galėtumėte atsijungti 😒",
		});
	}
});

router.get("/session", async (req, res) => {
	console.log("/api/auth/session");
	res.status(200).json(req.session.user || { isLoggedIn: false });
});
export default router;
