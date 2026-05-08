import mongoose, { Schema } from "mongoose";

const StockHistorySchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },

    type: {
      type: String,
      enum: ["import", "export", "adjustment"],
      required: true,
    },

    qty: {
      type: Number,
      required: true,
      min: 1,
    },

    // tồn trước khi thay đổi
    before: {
      type: Number,
      required: true,
      min: 0,
    },

    // tồn sau khi thay đổi
    after: {
      type: Number,
      required: true,
      min: 0,
    },

    // giúp audit nguồn gốc của thay đổi tồn kho
    referenceType: {
      type: String,
      enum: ["purchase", "sale", "manual"],
      required: true,
    },

    // purchaseOrderId hoặc salesOrderId hoặc null nếu referenceType là "manual"
    referenceId: {
      type: Schema.Types.ObjectId,
      required: true,
    },

    // với import: batch code duy nhất để theo dõi lô hàng, với export và adjustment có thể null
    batchCode: {
      type: String,
      trim: true,
      uppercase: true,
      index: true,
    },

    note: { type: String, trim: true, maxlength: 200 },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const StockHistory = mongoose.model("StockHistory", StockHistorySchema);
