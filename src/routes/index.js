import { Router } from "express";
import productRouter from "../modules/product/product.route.js";
import authRouter from "../modules/auth/auth.route.js";
import categoryRouter from "../modules/category/category.route.js";
import providerRouter from "../modules/Provider/provider.route.js";
import purchaseOrderRouter from "../modules/PO/po.route.js";
import stockHistoryRouter from "../modules/Stock history/stohis.route.js";
import salesOrderRouter from "../modules/SO/so.route.js";

const router = Router();

router.use("/products", productRouter);
router.use("/auth", authRouter);
router.use("/categories", categoryRouter);
router.use("/providers", providerRouter);
router.use("/purchase-orders", purchaseOrderRouter);
router.use("/sales-orders", salesOrderRouter);
router.use("/stock-history", stockHistoryRouter);

export default router;
