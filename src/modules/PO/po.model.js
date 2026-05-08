import mongoose, { Schema } from "mongoose";

const PurchaseOrderSchema = new Schema(
  {
    // lô hàng nhập, có thể dùng để theo dõi nhiều PO cùng lúc nếu cùng lô hàng
    batchCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
      index: true,
    },

    providerId: {
      type: Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },

    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },

        qtyOrdered: {
          type: Number,
          required: true,
          min: 1,
        },

        qtyReceived: {
          type: Number,
          required: true,
          min: 0,
        },

        costPrice: {
          type: Number,
          required: true,
          min: 0,
        },

        total: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],

    // tổng giá trị đặt hàng theo PO
    expectedTotal: {
      type: Number,
      required: true,
      min: 0,
    },

    // tổng sau khi kiểm
    actualTotal: {
      type: Number,
      required: true,
      min: 0,
    },

    difference: { type: Number, default: 0 }, // actualTotal - expectedTotal

    status: {
      type: String,
      enum: ["created", "checking", "completed"],
      default: "created",
      required: true,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    checkedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    completedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const PurchaseOrder = mongoose.model(
  "PurchaseOrder",
  PurchaseOrderSchema,
);
