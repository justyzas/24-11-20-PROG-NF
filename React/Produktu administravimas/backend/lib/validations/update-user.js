import { z } from "zod";
// firstName, lastName, email, password, salt (neprivalomi) "username"
export default z.object({
    firstName: z
        .string()
        .min(3, { message: "Vardas turėtų turėti bent 3 simbolius" })
        .max(70, { message: "Vardas turėtų turėti ne daugiau kaip 70 simbolių" })
        .trim()
        .optional(),
    lastName: z
        .string()
        .min(3, { message: "Pavardė turėtų turėti bent 3 simbolius" })
        .max(70, { message: "Pavardė turėtų turėti ne daugiau kaip 70 simbolių" })
        .trim()
        .optional(),
    email: z
        .string()
        .email({ message: "Elektroninio pašto formatas yra netinkamas!" })
        .trim()
        .optional(),
    password: z
        .string()
        .optional(),
    salt: z
    .string()
    .optional()
});