import express from "express";
import router from "./src/routes/index.js";
import connectDB from "./src/common/configs/connectDB.js";

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(
    `Ứng dụng của bạn đang được khởi động trên http://localhost:${port}`
  );
});
