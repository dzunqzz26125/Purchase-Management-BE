import { Router } from "express";
import productRouter from "./product.route.js";

const router = Router();

router.use("/products", productRouter);

export default router;
