import z from "zod";

export const productCreateSchema = z.object({
  name: z.string().trim().min(2).max(100),
  categoryId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
  costPrice: z.number().min(0),
  salePrice: z.number().min(0),
  stock: z.number().int().min(0),
});

export const productUpdateSchema = productCreateSchema
  .partial()
  .refine((body) => Object.keys(body).length > 0, {
    message: "At least one field is required",
  });
