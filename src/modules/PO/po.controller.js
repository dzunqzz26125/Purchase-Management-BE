import createResponse from "../../common/utils/createResponse.js";
import handleAsync from "../../common/utils/handleAsync.js";
import { PurchaseOrder } from "./po.model.js";

export const createPurchaseOrder = handleAsync(async (req, res) => {
  const purchaseOrder = await PurchaseOrder.create(req.body);
  res
    .status(201)
    .json(
      createResponse(
        true,
        201,
        "Purchase order created successfully",
        purchaseOrder,
      ),
    );
});

export const getPurchaseOrders = handleAsync(async (req, res) => {
  const purchaseOrders = await PurchaseOrder.find();
  res
    .status(200)
    .json(
      createResponse(
        true,
        200,
        "Purchase orders retrieved successfully",
        purchaseOrders,
      ),
    );
});

export const getPurchaseOrderDetail = handleAsync(async (req, res) => {
  const purchaseOrder = await PurchaseOrder.findById(req.params.id);
  if (!purchaseOrder) {
    return res
      .status(404)
      .json(createResponse(false, 404, "Purchase order not found"));
  }
  res
    .status(200)
    .json(
      createResponse(
        true,
        200,
        "Purchase order retrieved successfully",
        purchaseOrder,
      ),
    );
});

export const updatePurchaseOrder = handleAsync(async (req, res) => {
  const purchaseOrder = await PurchaseOrder.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
  );
  res
    .status(200)
    .json(
      createResponse(
        true,
        200,
        "Purchase order updated successfully",
        purchaseOrder,
      ),
    );
});

export const softDeletePurchaseOrder = handleAsync(async (req, res) => {
  const purchaseOrder = await PurchaseOrder.findByIdAndUpdate(
    req.params.id,
    { deletedAt: new Date() },
    { new: true },
  );
  res
    .status(200)
    .json(
      createResponse(
        true,
        200,
        "Purchase order soft deleted successfully",
        purchaseOrder,
      ),
    );
});

export const restorePurchaseOrder = handleAsync(async (req, res) => {
  const purchaseOrder = await PurchaseOrder.findByIdAndUpdate(
    req.params.id,
    { deletedAt: null },
    { new: true },
  );
  res
    .status(200)
    .json(
      createResponse(
        true,
        200,
        "Purchase order restored successfully",
        purchaseOrder,
      ),
    );
});
