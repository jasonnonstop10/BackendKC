const { postProduct } = require("../functions/product");
exports.postProduct = async (req, res) => {
  const product = await postProduct(req.body);
  res.send(product);
};
