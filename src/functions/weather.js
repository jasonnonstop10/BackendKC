const axios = require("axios");
const userAuth = require("../models/user.model");
const mongoose = require("mongoose");
const valid_id = mongoose.Types.ObjectId.isValid;
module.exports.getWeather = async (input) => {
  if (valid_id(input)) {
    const user = await userAuth.findOne({ _id: input, isDeleted: false });
    let region = "";
    region = user.region;
    const regionJS = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${region}&appid=f6e0fd6155de2dd25d21739c7f998724`
    );
    return regionJS.data;
  } else {
    throw {
      message: "userid is not defined",
      status: 404,
    };
  }
};
