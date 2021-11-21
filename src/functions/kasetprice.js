const axios = require("axios");
var FormData = require("form-data");
const moment = require("moment");
const https = require("https");
require("dotenv").config();
const redis = require("redis");
const { promisify } = require("util");

const redisClient = redis.createClient();
const getAsync = promisify(redisClient.get).bind(redisClient);

module.exports.getkasetpriceshow = async () => {
  const redisCacheKey = "kasetchana:KasetpriceShow";
  const form = new FormData();
  form.append("email", process.env.USER);
  const options = {
    method: "POST",
    url: "http://mis-app.oae.go.th/api/v1/service/id/price_day",
    data: form,
    headers: {
      "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
    },
  };
  const kasetprice = await axios.request(options);
  const cached = await getAsync(redisCacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  redisClient.set(redisCacheKey, JSON.stringify(response.data));
  return kasetprice.data;
};

module.exports.getkasetpricesearch = async (input) => {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const { keyword, sell_type } = input;
  const search = await axios.get("https://dataapi.moc.go.th/gis-products", {
    params: {
      keyword: keyword,
      sell_type: sell_type,
    },
    httpsAgent: agent,
  });
  const data = search.data[0].product_id;
  //current date format Integer YYYY-MM-DD using moment
  const date = moment().format("YYYY-MM-DD");
  //7 dey ago of current date format Integer YYYY-MM-DD using moment
  const date7 = moment().subtract(7, "days").format("YYYY-MM-DD");
  const kasetprice = await axios
    .get("https://dataapi.moc.go.th/gis-product-prices", {
      params: {
        product_id: data,
        from_date: date7,
        to_date: date,
      },
      httpsAgent: agent,
    })
    .then((response) => {
      return response.data;
    });
  return kasetprice;
};
