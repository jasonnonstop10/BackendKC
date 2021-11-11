const kasetplanModel = require("../models/kasetplan.model");
const mongoose = require("mongoose");
const valid_id = mongoose.Types.ObjectId.isValid;

module.exports.postKasetplan = async (input, user_id) => {
  const { no, geojson, asset, esimate } = input;
  return await kasetplanModel.create({
    no,
    geojson,
    asset,
    esimate,
    u_id: user_id,
  });
};
module.exports.getKasetplan = async (user_id) => {
  if (valid_id(user_id)) {
    return await kasetplanModel.find({ u_id: user_id });
  } else {
    console.log(user_id);
    throw {
      message: "kasetplan not found",
      status: 404,
    };
  }
};
module.exports.putKasetplan = async (payload, userId) => {
  const { no, geojson, asset, esimate } = payload;
  if (valid_id(userId)) {
    const kasetplan = await kasetplanModel.findOneAndUpdate(
      { no: no, u_id: userId },
      { geojson, asset, esimate, updatedAt: new Date() },
      { new: true }
    );
    console.log(kasetplan);
    return kasetplan;
  } else {
    throw {
      message: "kasetplan not found",
      status: 404,
    };
  }
};
module.exports.deleteKasetplan = async (input, userId) => {
  const { no } = input;
  if (valid_id(userId)) {
    const kasetplan = await kasetplanModel.findOneAndUpdate(
      { no, u_id: userId, isDeleted: false },
      { isDeleted: true },
      { new: true }
    );
    console.log(kasetplan);
    return kasetplan;
  } else {
    throw {
      message: "kasetplan not found",
      status: 404,
    };
  }
};
