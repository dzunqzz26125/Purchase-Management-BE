import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    }, // Tên danh mục
    description: {
      type: String,
    }, // Mô tả danh mục
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Category = mongoose.model("Category", categorySchema);
