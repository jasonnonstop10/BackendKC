const { getkasetprice } = require("../functions/kasetprice");
exports.getkasetprice = async (req, res, next) => {
  const { userId } = req;
  const kasetprice = await getkasetprice();
  res.send(kasetprice);
};
