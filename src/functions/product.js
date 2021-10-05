const productModel = require("../models/product.model");

module.exports.postProduct = async (input) => {
  const { product_id, product_name, category_name, sell_type } = input;
  return await productModel.create({
    product_id,
    product_name,
    category_name,
    sell_type,
  });
};
