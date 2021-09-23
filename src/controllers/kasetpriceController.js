const { getkasetprice } = require("../functions/kasetprice");
exports.getkasetprice = async (req, res, next) => {
  const kasetprice = await getkasetprice("P11001");
  res.send(kasetprice);
};
