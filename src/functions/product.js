const productModel = require("../models/product.model");
const axios = require("axios");
const { findOnePrice } = require("./kaset-price");
const https = require("https");

module.exports.getProduct = async (input) => {
  const { product_name } = input;
  return await productModel.find({product_name: {$regex: ".*" + product_name + ".*"}});
};

module.exports.getProductByGroup = async (input) => {
  const { group } = input;
  let data = []
  const response = await productModel.find({category_name: group});

  // response.forEach(async (res) => {
  //   data.push(
  //     {
  //       "_id": res._id,
  //       "product_id": res.product_id,
  //       "product_name": res.product_name,
  //       "category_name": res.category_name,
  //       "sell_type": res.sell_type,
  //       "created_at": res.created_at,
  //       "updated_at": res.updated_at,
  //       "product_price": 100,
  //     }
  //   );
  // });
  return response;
};

module.exports.findAllGroup = async () => {
  return await productModel.aggregate([
    { $group: { _id: "$category_name" } },
    { $sort: { _id: 1 } }
  ]);
};

module.exports.postProduct = async (input) => {
  const { product_id, product_name, category_name, sell_type } = input;
  return await productModel.create({
    product_id,
    product_name,
    category_name,
    sell_type,
  });
};
