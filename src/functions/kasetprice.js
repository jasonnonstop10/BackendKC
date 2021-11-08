const axios = require("axios");
var FormData = require("form-data");
const product = require("../models/product.model");
const mongoose = require("mongoose");
const { stringify } = require("flatted");
const moment = require("moment");
const https = require("https");
require("dotenv").config();

module.exports.getkasetpriceshow = async () => {
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
  const kasetprice = await axios.get(
    "https://dataapi.moc.go.th/gis-product-prices",
    {
      params: {
        product_id: data,
        from_date: date7,
        to_date: date,
      },
      httpsAgent: agent,
    }
  );
  //Converting circular structure to JSON\n    --> starting at object with constructor 'TLSSocket'\n    |     property '_httpMessage' -> object with constructor 'ClientRequest'\n    --- property 'socket' closes the circle
  const kasetpricejson = stringify(kasetprice.data);
  //obj to json
  const kasetpricejson2 = JSON.parse(kasetpricejson);
  return kasetpricejson2;
};
