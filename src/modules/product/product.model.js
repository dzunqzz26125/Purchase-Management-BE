import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Product = mongoose.model("Product", productSchema);
