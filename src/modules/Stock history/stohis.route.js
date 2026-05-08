import { Router } from "express";
import {
  createStockHistory,
  getStockHistories,
  getStockHistoryDetail,
} from "./stohis.controller.js";

const stockHistoryRouter = Router();

stockHistoryRouter.post("/", createStockHistory);
stockHistoryRouter.get("/", getStockHistories);
stockHistoryRouter.get("/:id", getStockHistoryDetail);

export default stockHistoryRouter;
