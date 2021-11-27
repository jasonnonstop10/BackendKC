const { getRain, getCumulativeRain, findOneCumulativeRain, findOneWeeklyCumulativeRain, getRegion } = require("../functions/rain");

exports.getRain = async (req, res) => {
  const rain = await getRain(req.body);
  res.send(rain);
};

exports.getRegion = async (req, res) => {
  const rain = await getRegion();
  res.send({
    data: rain,
    total: rain.length
  });
};

exports.getCumulativeRain = async (req, res) => {
  const rain = await getCumulativeRain(req.body);
  res.send(rain);
};

exports.findOneCumulativeRain = async (req, res) => {
  const { userId } = req;
  const rain = await findOneCumulativeRain(userId);
  res.send(rain);
};

exports.findOneWeeklyCumulativeRain = async (req, res) => {
  const { userId } = req;
  const rain = await findOneWeeklyCumulativeRain(userId);
  res.send(rain);
};