import { z } from "zod";
// firstName, lastName, email, password
export default z.object({
	firstName: z
		.string()
		.min(3, { message: "Vardas turėtų turėti bent 3 simbolius" })
		.max(70, { message: "Vardas turėtų turėti ne daugiau kaip 70 simbolių" }),
	lastName: z
		.string()
		.min(3, { message: "Pavardė turėtų turėti bent 3 simbolius" })
		.max(70, { message: "Pavardė turėtų turėti ne daugiau kaip 70 simbolių" }),
	email: z
		.string()
		.email({ message: "Elektroninio pašto formatas yra netinkamas!" }),
	password: z
		.string()
		.min(8)
		.max(100)
		.regex(/[a-ząčęėįšųūž]/g, {
			message: "Slaptažodis privalo turėti bent vieną mažąją raidę",
		})
		.regex(/[A-ZĄČĘĖĮŠŲŪŽ]/g, {
			message: "Slaptažodis privalo turėti bent vieną didžiąją raidę",
		})
		.regex(/[0-9]/g, {
			message: "Slaptažodis privalo turėti bent vieną skaičių",
		}),
});
