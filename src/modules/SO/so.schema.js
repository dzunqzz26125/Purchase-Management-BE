import z from "zod";

const objectIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");

export const SOCreateSchema = z.object({
  customerId: objectIdSchema,

  items: z
    .array(
      z.object({
        productId: objectIdSchema,
        qty: z.number().int().min(1),
        price: z.number().min(0),
      }),
    )
    .min(1, "At least one item is required"),

  note: z.string().max(500).optional(),
});

export const SOCreateValidatedSchema = SOCreateSchema.refine(
  (data) => {
    const ids = data.items.map((i) => i.productId);
    return new Set(ids).size === ids.length;
  },
  {
    message: "Duplicate product in items",
  },
);

export const SOUpdateSchema = SOCreateSchema.partial().refine(
  (body) => Object.keys(body).length > 0,
  {
    message: "At least one field is required",
  },
);
