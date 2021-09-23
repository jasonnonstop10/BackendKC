const kasetplanModel = require("../models/kasetplan.model");
const mongoose = require("mongoose");
const valid_id = mongoose.Types.ObjectId.isValid;

module.exports.postKasetplan = async (input, userId) => {
  const { name, price, latitude, longitude } = input;
  return await kasetplanModel.create({
    name,
    price,
    latitude,
    longitude,
    u_id: userId,
  });
};
module.exports.getKasetplan = async (user_id) => {
  const kasetplan = await kasetplanModel.find({ u_id: user_id });
  if (!kasetplan)
    throw {
      message: "kasetplan not found",
      status: 404,
    };

  return kasetplan;
};
module.exports.putKasetplan = async (payload, userId) => {
  let { name, price, latitude, longitude } = payload;

  if (!valid_id(input)) {
    res.status(404).send("invalid kasetplan_id");
  }
  const kasetplan = await userAuth.findOneAndUpdate(
    { _id: userId },
    { name, price, latitude, longitude },
    { new: true, omitUndefined: true }
  );
  if (!kasetplan)
    throw {
      message: "kasetplan not found",
      status: 404,
    };

  return kasetplan;
};
module.exports.deleteKasetplan = async (input) => {
  if (!valid_id(input)) {
    res.status(404).send("invalid kasetplan_id");
  }
  const kasetplan = await kasetplanModel.findOneAndUpdate(
    { _id: input, isDeleted: false },
    { isDeleted: true },
    { new: true }
  );
  if (!kasetplan)
    throw {
      message: "kasetplan not found",
      status: 404,
    };

  return kasetplan;
};
