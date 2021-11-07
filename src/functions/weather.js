const axios = require("axios");
const userAuth = require("../models/user.model");
const mongoose = require("mongoose");
const valid_id = mongoose.Types.ObjectId.isValid;
module.exports.getWeather = async (input) => {
  if (valid_id(input)) {
    const user = await userAuth.findOne({ _id: input, isDeleted: false });
    let region = "";
    region = user.region;

    var options = {
      method: "GET",
      url: "https://yahoo-weather5.p.rapidapi.com/weather",
      params: { location: region, format: "json", u: "f" },
      headers: {
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
        "x-rapidapi-key": "728f09f011mshaffebf4849d24fdp17df7ajsn51bb0e5660d6",
      },
    };
    const regionJS = await axios.request(options);
    return regionJS.data;
  } else {
    throw {
      message: "userid is not defined",
      status: 404,
    };
  }
};
