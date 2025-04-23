import { z } from "zod";

export const ProductCreationValidation = z.object({
    id: z.number().optional(),
    name: z.string().min(5).max(255),
    description: z.string().max(1000).optional(),
    price: z.number(),
    quantity: z.number().optional(),
    status: z
    .enum(["Aktyvus", "Nebetiekiamas", "Mažėjantis likutis"])
    .optional(),
    created_at: z.date().optional(),
    deleted_at: z.date().optional(),
    updated_at: z.date().optional(),
});