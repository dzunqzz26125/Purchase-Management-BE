import createResponse from "../../common/utils/createResponse.js";
import handleAsync from "../../common/utils/handleAsync.js";
import { SalesOrder } from "./so.model.js";

export const createSalesOrder = handleAsync(async (req, res) => {
  const salesOrder = await SalesOrder.create(req.body);
  res
    .status(201)
    .json(
      createResponse(true, 201, "Sales order created successfully", salesOrder),
    );
});

export const getSalesOrders = handleAsync(async (req, res) => {
  const salesOrders = await SalesOrder.find();
  res
    .status(200)
    .json(
      createResponse(
        true,
        200,
        "Sales orders retrieved successfully",
        salesOrders,
      ),
    );
});

export const getSalesOrderDetail = handleAsync(async (req, res) => {
  const salesOrder = await SalesOrder.findById(req.params.id);

  if (!salesOrder) {
    return res
      .status(404)
      .json(createResponse(false, 404, "Sales order not found"));
  }
  res
    .status(200)
    .json(
      createResponse(
        true,
        200,
        "Sales order retrieved successfully",
        salesOrder,
      ),
    );
});

export const updateSalesOrder = handleAsync(async (req, res) => {
  const salesOrder = await SalesOrder.findOneAndUpdate(
    { _id: req.params.id, deletedAt: null },
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!salesOrder) {
    return res
      .status(404)
      .json(createResponse(false, 404, "Sales order not found"));
  }

  res
    .status(200)
    .json(
      createResponse(true, 200, "Sales order updated successfully", salesOrder),
    );
});

export const deleteSalesOrder = handleAsync(async (req, res) => {
  await SalesOrder.findByIdAndDelete(req.params.id);
  res
    .status(200)
    .json(createResponse(true, 200, "Sales order deleted successfully"));
});

export const softDeleteSalesOrder = handleAsync(async (req, res) => {
  const salesOrder = await SalesOrder.findOneAndUpdate(
    { _id: req.params.id, deletedAt: null },
    { deletedAt: new Date() },
    { new: true },
  );

  if (!salesOrder) {
    return res
      .status(404)
      .json(createResponse(false, 404, "Sales order not found"));
  }

  res
    .status(200)
    .json(
      createResponse(
        true,
        200,
        "Sales order soft deleted successfully",
        salesOrder,
      ),
    );
});

export const restoreSalesOrder = handleAsync(async (req, res) => {
  const salesOrder = await SalesOrder.findOneAndUpdate(
    { _id: req.params.id, deletedAt: null },
    { deletedAt: null },
    { new: true },
  );

  if (!salesOrder) {
    return res
      .status(404)
      .json(createResponse(false, 404, "Sales order not found"));
  }

  res
    .status(200)
    .json(
      createResponse(
        true,
        200,
        "Sales order restored successfully",
        salesOrder,
      ),
    );
});
