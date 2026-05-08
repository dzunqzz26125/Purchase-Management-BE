import createResponse from "../../common/utils/createResponse.js";
import handleAsync from "../../common/utils/handleAsync.js";
import { StockHistory } from "./stohis.model.js";

export const createStockHistory = handleAsync(async (req, res) => {
  const stockHistory = await StockHistory.create(req.body);
  res
    .status(201)
    .json(
      createResponse(
        true,
        201,
        "Stock history created successfully",
        stockHistory,
      ),
    );
});

export const getStockHistories = handleAsync(async (req, res) => {
  const stockHistories = await StockHistory.find();
  res
    .status(200)
    .json(
      createResponse(
        true,
        200,
        "Stock histories retrieved successfully",
        stockHistories,
      ),
    );
});

export const getStockHistoryDetail = handleAsync(async (req, res) => {
  const stockHistory = await StockHistory.findById(req.params.id);

  if (!stockHistory) {
    return res
      .status(404)
      .json(createResponse(false, 404, "Stock history not found"));
  }

  res
    .status(200)
    .json(
      createResponse(
        true,
        200,
        "Stock history retrieved successfully",
        stockHistory,
      ),
    );
});
