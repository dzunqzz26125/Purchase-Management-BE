import z from "zod";

const objectIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");

export const purchaseOrderCreateSchema = z.object({
  supplierId: objectIdSchema,
  items: z.array(
    z.object({
      productId: objectIdSchema,
      qty: z.number().int().min(1),
      price: z.number().min(0),
    }),
  ),
});

export const purchaseOrderUpdateSchema = purchaseOrderCreateSchema
  .partial()
  .refine((body) => Object.keys(body).length > 0, {
    message: "At least one field is required",
  });
