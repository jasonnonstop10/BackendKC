const { postPlant } = require("../functions/plant");
exports.postPlant = async (req, res) => {
  const { userId } = req;
  const plant = await postPlant(req.body, userId);
  res.send(plant);
};
