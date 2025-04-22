import express from "express";
import {
	isValidCredentials,
} from "../lib/security.js";
import { UserDTO, UserModel } from "../model/user-model.js";
import registrationSchema from "../lib/validations/register.js";
import loginSchema from "../lib/validations/login.js";
import { ZodError } from "zod";
import { handle } from "../lib/handleRouteHandlerErorrs.js";
const router = express.Router();

// /api/auth/login

router.post("/register", async (req, res) => {
	console.log("/api/auth/registration");
	try {
		registrationSchema.parse(req.body); // Validuojame
		const user = new UserDTO(req.body);
		const userFromDb = await UserModel.create(user);

		// req.session.user = {
		// 	id: user.id,
		// 	email: user.email,
		// 	firstName: user.firstName,
		// 	lastName: user.lastName,
		// 	isLoggedIn: true,
		// };

		res.status(200).send({
			message: "✅ Registration was successful!",
			user: userFromDb,
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

router.post("/login", async (req, res) => {
	console.log("/api/auth/login");
	try {
		const { email, password } = req.body;
		loginSchema.parse(req.body);
		const user = await UserModel.getUserByEmail(email);

		if (!isValidCredentials(password, user.getSalt(), user.getPassword()))
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
		handle(err ,res);
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

router.get("/session", (req, res) => {
	console.log("/api/auth/session");
	res.status(200).json(req.session.user || { isLoggedIn: false });
});
export default router;
