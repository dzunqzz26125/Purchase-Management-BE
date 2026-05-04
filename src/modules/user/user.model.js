import mongoose from "mongoose";

const schemaUser = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    address: String,
    phoneNumber: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = mongoose.model("User", schemaUser);
