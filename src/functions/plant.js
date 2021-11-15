const plantModel = require("../models/plant.model");
const mongoose = require("mongoose");
const valid_id = mongoose.Types.ObjectId.isValid;
module.exports.postPlant = async (input, userId) => {
  console.log("user", userId);
  if (valid_id(userId)) {
    const { plant_id, name, description, photo, planttime, plantpersqrmeter } =
      input;
    return await plantModel.create({
      plant_id,
      name,
      description,
      photo,
      planttime,
      plantpersqrmeter,
    });
  } else {
    throw new Error("Invalid user id");
  }
};
module.exports.getPlant = async (user_id) => {
  if (valid_id(user_id)) {
    return await plantModel.find();
  } else {
    throw new Error("Invalid plant id");
  }
};
module.exports.getPlantfindById = async (user_id, plant_id) => {
  if (valid_id(user_id)) {
    return await plantModel.findOne(plant_id);
  } else {
    throw new Error("Invalid plant id");
  }
};
