import express from "express";
import mongoose from "mongoose";
import router from "./src/routes/index.js";

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/fs25091-nodejs");

app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(
    `Ứng dụng của bạn đang được khởi động trên http://localhost:${port}`
  );
});
