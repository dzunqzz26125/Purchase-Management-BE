import { Router } from "express";
import productRouter from "../modules/product/product.route.js";

const router = Router();

router.use("/products", productRouter);

export default router;
