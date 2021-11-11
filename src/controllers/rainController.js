const { getRain, getCumulativeRain } = require("../functions/rain");
exports.getRain = async (req, res) => {
  const rain = await getRain(req.body);
  res.send(rain);
};

exports.getCumulativeRain = async (req, res) => {
  const rain = await getCumulativeRain(req.body);
  res.send(rain);
};
