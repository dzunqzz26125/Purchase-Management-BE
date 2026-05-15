import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
    role: {
      type: String,
      enum: ["admin", "staff", "user"],
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    address: String,
    phoneNumber: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

schemaUser.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

schemaUser.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model("User", schemaUser);
