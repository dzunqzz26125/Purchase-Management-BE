import { z } from "zod";

const objectId = z.string().regex(/^[0-9a-fA-F]{24}$/);

export const stockHistoryCreateSchema = z
  .object({
    productId: objectId,

    type: z.enum(["import", "export", "adjustment"]),

    qty: z.number().int().min(1),

    before: z.number().int().min(0),

    after: z.number().int().min(0),

    referenceType: z.enum(["purchase", "sale", "manual"]),

    referenceId: objectId.optional(),

    batchCode: z.string().trim().toUpperCase().optional(),

    note: z.string().trim().max(200).optional(),

    createdBy: objectId,
  })

  // validate logic nghiệp vụ
  .superRefine((data, ctx) => {
    const { type, qty, before, after, referenceType, referenceId } = data;

    // 1. validate before/after logic
    if (type === "import" && after !== before + qty) {
      ctx.addIssue({
        path: ["after"],
        message: "Hàng tồn sau phải bằng hàng tồn trước + số lượng nhập",
      });
    }

    if (type === "export" && after !== before - qty) {
      ctx.addIssue({
        path: ["after"],
        message: "Hàng tồn sau phải bằng hàng tồn trước - số lượng xuất",
      });
    }

    // 2. validate referenceId theo referenceType
    if (referenceType !== "manual" && !referenceId) {
      ctx.addIssue({
        path: ["referenceId"],
        message: "Biến động không phải thủ công phải có referenceId",
      });
    }

    if (referenceType === "manual" && referenceId) {
      ctx.addIssue({
        path: ["referenceId"],
        message: "Biến động thủ công không được có referenceId",
      });
    }
  });
