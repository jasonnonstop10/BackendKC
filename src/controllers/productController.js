const { postProduct, getProduct, findAllGroup, getProductByGroup } = require("../functions/product");

exports.getProduct = async (req, res) => {
  const product = await getProduct(req.query);
  res.send({
    data: product,
    total: product.length
  });
};

exports.getProductByGroup = async (req, res) => {
  const product = await getProductByGroup(req.query);
  res.send({
    data: product,
    total: product.length
  });
};

exports.findAllGroup = async (req, res) => {
  const group = await findAllGroup();
  res.send({
    data: group,
    total: group.length
  });
};

exports.postProduct = async (req, res) => {
  const product = await postProduct(req.body);
  res.send(product);
};
