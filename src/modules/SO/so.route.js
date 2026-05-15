import { Router } from "express";
import {
  createSalesOrder,
  deleteSalesOrder,
  getSalesOrderDetail,
  getSalesOrders,
  restoreSalesOrder,
  softDeleteSalesOrder,
  updateSalesOrder,
} from "./so.controller.js";

const salesOrderRouter = Router();

salesOrderRouter.post("/", createSalesOrder);
salesOrderRouter.get("/", getSalesOrders);
salesOrderRouter.get("/:id", getSalesOrderDetail);
salesOrderRouter.patch("/:id", updateSalesOrder);
salesOrderRouter.delete("/:id", deleteSalesOrder);
salesOrderRouter.delete("/:id", softDeleteSalesOrder);
salesOrderRouter.patch("/restore/:id", restoreSalesOrder);

export default salesOrderRouter;
