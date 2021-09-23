const { getWeather } = require("../functions/weather");
exports.getWeather = async (req, res, next) => {
  if (req.body._id) {
    const weather = await getWeather(req.body._id);
    res.send(weather);
  } else {
    const { userId } = req;
    console.log(userId);
    const weather = await getWeather(userId);
    res.send(weather);
  }
};
