const kasetplanModel = require("../models/kasetplan.model");
const mongoose = require("mongoose");
var geojsonArea = require("@mapbox/geojson-area");
const valid_id = mongoose.Types.ObjectId.isValid;

module.exports.postKasetplan = async (input, user_id) => {
  delete input._id;
  input.asset = [];
  input.u_id = user_id;
  return await kasetplanModel.create(input);
};
module.exports.getKasetplan = async (user_id) => {
  if (valid_id(user_id)) {
    const kasetplan = await kasetplanModel.find({ u_id: user_id});
    /*kasetplan data { data: [kasetplan]} */
    // const data = { data: kasetplan };
    if (!kasetplan) {
      return {};
    } else {
      return kasetplan;
    }
  } else {
    console.log(user_id);
    throw {
      message: "kasetplan not found",
      status: 404,
    };
  }
};
module.exports.getOneKasetplan = async (user_id) => {
  if (valid_id(user_id)) {
    const kasetplan = await kasetplanModel.findOne({ u_id: user_id, isActive: true});
    /*kasetplan data { data: [kasetplan]} */
    // const data = { data: kasetplan };
    if (!kasetplan) {
      return {};
    } else {
      return kasetplan;
    }
  } else {
    console.log(user_id);
    throw {
      message: "kasetplan not found",
      status: 404,
    };
  }
};
module.exports.putKasetplan = async (payload, userId) => {
  const { planName, asset, esimate, isActive, mapLat, mapLng, mapZoom } = payload;
  if (valid_id(userId)) {
    const kasetplan = await kasetplanModel.findOneAndUpdate(
      { planName: planName, u_id: userId },
      { asset, esimate, isActive, mapLat, mapLng, mapZoom, updatedAt: new Date() },
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
module.exports.getKasetplanById = async (input, userId) => {
  const { no } = input;
  if (valid_id(userId)) {
    const kasetplan = await kasetplanModel.findOne({ no, u_id: userId });
    console.log(kasetplan);
    return kasetplan;
  } else {
    throw {
      message: "kasetplan not found",
      status: 404,
    };
  }
};
module.exports.getporforio = async (userId) => {
  const kasetplan = await kasetplanModel.find({ u_id: userId });
  //maping kasetplan to porforio

  const porforio = await kasetplan.map((item) => {
    const area = geojsonArea.geometry(item.geojson);
    const price = item.asset[0].volume * item.asset[0].price;
    const day = item.asset[0].day;
    return {
      no: item.no,
      totalarea: area,
      totalprice: price,
      totalday: day,
    };
  });
  return porforio;
};
