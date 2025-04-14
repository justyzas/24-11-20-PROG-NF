import { z } from "zod";

export default z.object({
	email: z
		.string()
		.email({ message: "Elektroninio pašto formatas yra netinkamas!" }),
	password: z
		.string()
		.min(8, { message: "Slaptažodis privalo būti bent 8 simbolių ilgio" })
		.max(100, { message: "Slaptažodis privalo būti iki 100 simbolių ilgio" })
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
