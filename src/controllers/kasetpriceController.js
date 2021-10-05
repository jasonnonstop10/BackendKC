const { getkasetprice } = require("../functions/kasetprice");
exports.getkasetprice = async (req, res) => {
  const kasetprice = await getkasetprice(req.body);
  res.json(kasetprice);
};
