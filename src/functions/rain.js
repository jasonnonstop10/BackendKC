const axios = require("axios");

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
