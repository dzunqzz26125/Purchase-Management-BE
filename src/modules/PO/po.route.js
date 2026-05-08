import { Router } from "express";
import {
  createPurchaseOrder,
  getPurchaseOrderDetail,
  getPurchaseOrders,
  restorePurchaseOrder,
  softDeletePurchaseOrder,
  updatePurchaseOrder,
} from "./po.controller.js";

const purchaseOrderRouter = Router();

purchaseOrderRouter.post("/", createPurchaseOrder);
purchaseOrderRouter.get("/", getPurchaseOrders);
purchaseOrderRouter.get("/:id", getPurchaseOrderDetail);
purchaseOrderRouter.patch("/:id", updatePurchaseOrder);
purchaseOrderRouter.delete("/:id", softDeletePurchaseOrder);
purchaseOrderRouter.patch("/restore/:id", restorePurchaseOrder);

export default purchaseOrderRouter;
