const axios = require("axios");
const userAuth = require("../models/user.model");

module.exports.getRain = async (input) => {
  const kasetrain = await axios
    .get("http://data.tmd.go.th/api/Station/v1/", {
      params: {
        uid: "u64kasetchana5",
        ukey: "f99ecca3ac1fd0fa15328457ca3b2b01",
        format: "json",
      },
    })
    .then((response) => {
      return response.data;
    });
  // return response.data;
  return kasetrain;
};
module.exports.getCumulativeRain = async (input) => {
  const kasetrain = await axios
    .get("http://data.tmd.go.th/api/thailandMonthlyRainfall/v1/", {
      params: {
        uid: "u64kasetchana5",
        ukey: "f99ecca3ac1fd0fa15328457ca3b2b01",
        format: "json",
        year: "2021",
      },
    })
    .then((response) => {
      return response.data;
    });
  return kasetrain;
};

module.exports.findOneCumulativeRain = async (input) => {
  const kasetrain = await axios
    .get("http://data.tmd.go.th/api/thailandMonthlyRainfall/v1/", {
      params: {
        uid: "u64kasetchana5",
        ukey: "f99ecca3ac1fd0fa15328457ca3b2b01",
        format: "json",
        year: "2021",
      },
    })
    .then(async (response) => {
      const user = await userAuth.findOne({ _id: input, isDeleted: false });

      var options = {
        method: "GET",
        url: "https://yahoo-weather5.p.rapidapi.com/weather",
        params: { location: user.region, format: "json", u: "c" },
        headers: {
          "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
          "x-rapidapi-key":
            "728f09f011mshaffebf4849d24fdp17df7ajsn51bb0e5660d6",
        },
      };
      const regionJS = await axios.request(options);
      let resData = {};
      for (let item of response.data["StationMonthlyRainfall"]) {
        if (
          item.StationNameEnglish.toUpperCase().split(" ").join("") ===
          regionJS.data["location"]["region"].toUpperCase().split(" ").join("")
        ) {
          resData = item;
          break;
        }
      }
      return resData;
    });
  return kasetrain;
};

module.exports.findOneWeeklyCumulativeRain = async (input) => {
  const kasetrain = await axios
    .get("https://data.tmd.go.th/api/WeatherForecast7Days/V1/", {
      params: {
        uid: "u64kasetchana5",
        ukey: "f99ecca3ac1fd0fa15328457ca3b2b01",
        format: "json",
        year: "2021",
      },
    })
    .then(async (response) => {
      const user = await userAuth.findOne({ _id: input, isDeleted: false });

      var options = {
        method: "GET",
        url: "https://yahoo-weather5.p.rapidapi.com/weather",
        params: { location: user.region, format: "json", u: "c" },
        headers: {
          "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
          "x-rapidapi-key":
            "728f09f011mshaffebf4849d24fdp17df7ajsn51bb0e5660d6",
        },
      };
      const regionJS = await axios.request(options);
      let resData = {};
      for (let item of response.data["Provinces"]) {
        if (
          item.ProvinceNameEng.toUpperCase().split(" ").join("") ===
          regionJS.data["location"]["region"].toUpperCase().split(" ").join("")
        ) {
          resData = item;
          break;
        }
      }
      return resData;
    });
  return kasetrain;
};
