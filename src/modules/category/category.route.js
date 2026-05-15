import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryDetail,
  restoreCategory,
  softDeleteCategory,
  updateCategory,
} from "./category.controller.js";

const categoryRouter = Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategoryDetail);
categoryRouter.patch("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);
categoryRouter.delete("/soft-delete/:id", softDeleteCategory);
categoryRouter.patch("/restore/:id", restoreCategory);

export default categoryRouter;
