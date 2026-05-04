import { Router } from "express";
import {
  createProduct,
  getProductDetail,
  getProducts,
} from "./product.controller.js";

const productRouter = Router();

productRouter.post("/", createProduct);
productRouter.get("/", getProducts);
productRouter.get("/:id", getProductDetail);

export default productRouter;
