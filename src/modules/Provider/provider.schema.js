import z from "zod";

export const providerCreateSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().optional(),
  email: z.string().email().optional(),
  address: z.string().trim().max(200).optional(),
});

export const providerUpdateSchema = providerCreateSchema
  .partial()
  .refine((body) => Object.keys(body).length > 0, {
    message: "At least one field is required",
  });
