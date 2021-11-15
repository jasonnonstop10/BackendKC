const { postPlant, getPlant, getPlantfindById } = require("../functions/plant");
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

exports.getPlantfindById = async (req, res) => {
  const { plant_id } = req.query;
  const { userId } = req;
  const plant = await getPlantfindById(userId, plant_id);
  res.send(plant);
};
