// models/Supplier.js
import mongoose, { Schema } from "mongoose";

const ProviderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    phone: {
      type: String,
      trim: true,
      match: /^[0-9]{9,12}$/,
    },

    address: {
      type: String,
      trim: true,
      maxlength: 200,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    note: {
      type: String,
      trim: true,
      maxlength: 200,
    },

    // công nợ nhà cung cấp
    debt: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Provider = mongoose.model("Provider", ProviderSchema);
