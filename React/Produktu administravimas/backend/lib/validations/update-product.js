import {z} from "zod";
export default z.object({
    name: z.string().min(5).max(255).optional(),
    description: z.string().max(1000).optional(),
    price: z.number().min(0.01).max(99999999.99).optional(),
    quantity: z.number().min(0).optional(),
    status: z
    .enum(["Aktyvus", "Nebetiekiamas", "Mažėjantis likutis"])
    .optional(),
    deleted_at: z.date().optional(),
});