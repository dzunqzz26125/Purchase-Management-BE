import mongoose from "mongoose";

export default function connectDB() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/fs25091-nodejs")
    .then(() => {
      console.log("Connect database successfully!");
    })
    .catch((err) => {
      console.log(`Connect DB error: ${JSON.stringify(err)}`);
    });
}
