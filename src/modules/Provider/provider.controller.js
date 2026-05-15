import createResponse from "../../common/utils/createResponse.js";
import handleAsync from "../../common/utils/handleAsync.js";
import { Provider } from "./provider.model.js";

export const createProvider = handleAsync(async (req, res) => {
  const product = await Provider.create(req.body);
  res
    .status(201)
    .json(createResponse(true, 201, "Provider created successfully", product));
});

export const getProviders = handleAsync(async (req, res) => {
  const providers = await Provider.find({ deletedAt: null });

  const filter = req.query.includeDeleted === "true" ? {} : { deletedAt: null };

  const deletedProviders = await Provider.find(filter);
  res
    .status(200)
    .json(
      createResponse(true, 200, "Providers retrieved successfully", providers),
    );
});

export const getProviderDetail = handleAsync(async (req, res) => {
  const provider = await Provider.findOne({
    _id: req.params.id,
    deletedAt: null,
  });
  if (!provider) {
    return res
      .status(404)
      .json(createResponse(false, 404, "Provider not found"));
  }
  res
    .status(200)
    .json(
      createResponse(true, 200, "Provider retrieved successfully", provider),
    );
});

export const updateProvider = handleAsync(async (req, res) => {
  const provider = await Provider.findOneAndUpdate(
    { _id: req.params.id, deletedAt: null },
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!provider) {
    return res
      .status(404)
      .json(createResponse(false, 404, "Provider not found"));
  }

  res
    .status(200)
    .json(createResponse(true, 200, "Provider updated successfully", provider));
});

export const softDeleteProvider = handleAsync(async (req, res) => {
  const provider = await Provider.findOneAndUpdate(
    { _id: req.params.id, deletedAt: null },
    { deletedAt: new Date() },
    { new: true },
  );

  if (!provider) {
    return res
      .status(404)
      .json(createResponse(false, 404, "Provider not found"));
  }

  res
    .status(200)
    .json(
      createResponse(true, 200, "Provider soft deleted successfully", provider),
    );
});

export const restoreProvider = handleAsync(async (req, res) => {
  const provider = await Provider.findOneAndUpdate(
    { _id: req.params.id, deletedAt: null },
    { deletedAt: null },
    { new: true },
  );

  if (!provider) {
    return res
      .status(404)
      .json(createResponse(false, 404, "Provider not found"));
  }

  res
    .status(200)
    .json(
      createResponse(true, 200, "Provider restored successfully", provider),
    );
});
