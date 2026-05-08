import { Router } from "express";
import {
  createProvider,
  getProviderDetail,
  getProviders,
  restoreProvider,
  softDeleteProvider,
  updateProvider,
} from "./provider.controller.js";

const providerRouter = Router();

providerRouter.post("/", createProvider);
providerRouter.get("/", getProviders);
providerRouter.get("/:id", getProviderDetail);
providerRouter.patch("/:id", updateProvider);
providerRouter.delete("/:id", softDeleteProvider);
providerRouter.patch("/restore/:id", restoreProvider);

export default providerRouter;
