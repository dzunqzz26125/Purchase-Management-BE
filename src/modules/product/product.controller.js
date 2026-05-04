import { Product } from "./product.model.js";

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

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      message: "Thanh cong!",
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "error",
    });
  }
};

export const getProductDetail = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`params: `, req.params);
    console.log(id);
    const product = await Product.findById(id);
    // const user = await User.findOne({email: "hoang@gmail.com"})
    res.status(200).json({
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
