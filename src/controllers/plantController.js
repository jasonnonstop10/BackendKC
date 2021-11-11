const { postPlant, getPlant } = require("../functions/plant");
exports.postPlant = async (req, res) => {
  const { userId } = req;
  const plant = await postPlant(req.body, userId);
  res.send(plant);
};
exports.getPlant = async (req, res) => {
  const { userId } = req;
  const plant = await getPlant(userId);
  var obj = {
    data: plant,
  };
  res.send(obj);
};
