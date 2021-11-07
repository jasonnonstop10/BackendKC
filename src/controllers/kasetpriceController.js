const {
  getkasetpriceshow,
  getkasetpricesearch,
} = require("../functions/kasetprice");
exports.getkasetpriceshow = async (req, res) => {
  const kasetprice = await getkasetpriceshow();
  res.json(kasetprice);
};
exports.getkasetpricesearch = async (req, res) => {
  const kasetprice = await getkasetpricesearch(req.body);
  res.json(kasetprice);
};
