import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";
import connectDB from "./src/common/configs/connectDB.js";
import jsonValidator from "./src/common/middlewares/jsonValidator.js";
import notFoundHandler from "./src/common/middlewares/notfoundHandler.js";
import errorHandler from "./src/common/middlewares/errorHandler.js";
import { configenv } from "./src/common/configs/configenv.js";

const app = express();

const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

connectDB();

app.use(
  cors({
    origin: `${configenv.FE_PORT}`,
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api", router);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(configenv.PORT, () => {
  console.log(
    `Ứng dụng của bạn đang được khởi động trên cổng ${configenv.PORT}`,
  );
});
