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
module.exports.getPlant = async (id) => {
  if (valid_id(id)) {
    return await plantModel.findById(id);
  } else {
    throw new Error("Invalid plant id");
  }
};
