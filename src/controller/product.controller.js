import { Product } from "../model/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      message: "Thanh cong!",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "error",
    });
  }
};
