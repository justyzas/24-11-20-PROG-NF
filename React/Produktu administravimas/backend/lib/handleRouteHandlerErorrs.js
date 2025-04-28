import { ZodError } from "zod";

export function handle(err, res) {
	console.log(err);

	if (err instanceof ZodError)
		return res.status(400).json({
			message: "Įvyko validacijos klaida",
			validationMessage: err.issues[0].message,
			errorData: err,
		});
	if (err instanceof Error && err.code === "ER_DUP_ENTRY") {
		return res.status(409).json({
			message: "Įvyko įterpimo klaida - unikalus laukelis nebuvo įterptas",
		});
	}
	if (err instanceof Error && err.cause === "NOT_FOUND") {
		return res.status(404).json({
			message: "Įrašas nerastas duomenų bazėje.",
		});
	}
	res.status(500).json({ message: "Internal server error occured" });
}
