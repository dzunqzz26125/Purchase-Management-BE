import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    sku: {
      type: String,
      unique: true,
    }, // Mã sản phẩm
    name: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    unit: {
      type: String,
      required: true,
    }, // đơn vị tính: hộp, chai, kg...
    costPrice: {
      type: Number,
      required: true,
    }, // giá vốn hiện tại
    sellPrice: {
      type: Number,
      required: true,
    }, // giá bán hiện tại
    stock: {
      type: Number,
      required: true,
    }, // tồn kho thực tại
    minStock: {
      type: Number,
    }, // cảnh báo hết hàng
    images: [
      {
        url: String,
        alt: String,
      },
    ],
    createdAt: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product = mongoose.model("Product", productSchema);
