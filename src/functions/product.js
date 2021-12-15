const productModel = require("../models/product.model");
const axios = require("axios");
const https = require("https");

module.exports.getProduct = async (input) => {
  const { product_name, array } = input;
  const res = await productModel.find({product_name: {$regex: ".*" + product_name + ".*"}});
  // const res = await productModel.find();
  // const agent = new https.Agent({
  //   rejectUnauthorized: false,
  // });
  // const data2 = await axios.get("https://dataapi.moc.go.th/gis-product-prices", {
  //     params: {
  //       product_id: res[array].product_id,
  //       from_date: "2021-11-26",
  //       to_date: "2021-11-26",
  //     },
  //     httpsAgent: agent,
  //   });
  //   console.log(data2.data);
  //   res[array].product_price = data2.data.price_max_avg ?? 0;
  //   await productModel.findOneAndUpdate({product_id: res[array].product_id}, res[array]);
  //   console.log(array);
  return res;
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
