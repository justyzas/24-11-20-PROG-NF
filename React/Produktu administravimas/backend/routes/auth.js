import express from "express";
import {
	generateSalt,
	hashPassword,
	isValidCredentials,
} from "../lib/security.js";
import registrationSchema from "../lib/validations/register.js";
import loginSchema from "../lib/validations/login.js";
import { handle } from "../lib/handleRouteHandlerErorrs.js";
import User from "../models/user.js";
import { isLogged, isNotLogged } from "../lib/middlewares/index.js";
const router = express.Router();

// /api/auth/login

router.post("/register", isNotLogged, async (req, res) => {
	console.log("/api/auth/registration");
	try {
		const {firstName, lastName, email, password} = registrationSchema.parse(req.body); // Validuojame
		const salt = generateSalt();
		const user = await User.create({
			firstName,
			lastName,
			email,
			salt,
			password: hashPassword(password, salt)
		});
		// const userFromDb = await UserModel.create(user);

		// req.session.user = {
		// 	id: user.id,
		// 	email: user.email,
		// 	firstName: user.firstName,
		// 	lastName: user.lastName,
		// 	isLoggedIn: true,
		// };

		res.status(200).send({
			message: "✅ Registration was successful!",
			user: {...user.toJSON(), password: undefined, salt: undefined},
		});
	} catch (err) {

		if (err instanceof Error && err.code === "ER_DUP_ENTRY") {
			return res.status(409).json({
				message:
					"Įvyko įterpimo klaida - naudotojas su tokiu elektroniniu paštu jau yra užregistruotas",
			});
		}
		handle(err, res);
	}
});

router.post("/login", isNotLogged, async (req, res) => {
	console.log("/api/auth/login");
	try {
		const { email, password } = req.body;
		loginSchema.parse(req.body);
		const user = await User.findOne({where: {email}});
		if(!user)
			throw new Error("User was not found", {
				cause: "NOT_FOUND",
			});
		if (!isValidCredentials(password, user.salt, user.password))
			return res
				.status(403)
				.json({ message: "Pateiktas prisijungimo duomenys buvo neteisingi" });

		req.session.user = {
			id: user.id,
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			isLoggedIn: true,
		};

		res.status(200).send({ message: "Prisijungimas buvo sėkmingas" });
	} catch (err) {
		if (err instanceof Error && err.cause === "NOT_FOUND")
			return res
				.status(403)
				.json({ message: "Prisijungimo duomenys yra neteisingi!" });
		handle(err, res);
	}
});

router.get("/logout", isLogged, (req, res) => {
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

router.get("/session", (req, res) => {
	console.log("/api/auth/session");
	res.status(200).json(req.session.user || { isLoggedIn: false });
});
export default router;
