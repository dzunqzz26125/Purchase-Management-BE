import { Router } from "express";
import { createProduct } from "../controller/product.controller.js";

const productRouter = Router();

productRouter.post("/", createProduct);
// productRouter.get("/", getProducts);
// productRouter.get("/:id", getProductDetail);

export default productRouter;
