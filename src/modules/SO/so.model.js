// models/SalesOrder.js
import mongoose, { Schema } from "mongoose";


const SalesOrderSchema = new Schema(
  {
    orderCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
      index: true,
    },

    customerName: { type: String, trim: true, maxlength: 100 },

    customerPhone: {
      type: String,
      trim: true,
      match: /^[0-9]{9,12}$/,
    },

    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },

        qty: {
          type: Number,
          required: true,
          min: 1,
        },

        price: {
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

    grandTotal: {
      type: Number,
      required: true,
      min: 0,
    },

    paymentMethod: {
      type: String,
      enum: ["cash", "transfer"],
      required: true,
    },

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

export const SalesOrder = mongoose.model("SalesOrder", SalesOrderSchema);
