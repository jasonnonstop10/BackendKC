const axios = require("axios");
var FormData = require("form-data");
const product = require("../models/product.model");
const mongoose = require("mongoose");
const CircularJSON = require("circular-json");
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
  //current date format Integer YYYY-MM-DD
  //7 dey ago of current date format YYYY-MM-DD and zerofill
  const date_7ago = new Date(date.setDate(date.getDate() - 7));
  const year_7ago = date_7ago.getFullYear();
  const month_7ago = date_7ago.getMonth() + 1;
  const day_7ago = date_7ago.getDate();
  const date_7ago_now = year_7ago + "-" + month_7ago + "-" + day_7ago;
  const kasetprice = await axios.get(
    "https://dataapi.moc.go.th/gis-product-price",
    {
      params: {
        product_id: data,
        from_date: date_7ago_now,
        to_date: date_now,
      },
      httpsAgent: agent,
    }
  );
  console.log(kasetprice);
};
