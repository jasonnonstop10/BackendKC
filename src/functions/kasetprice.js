const axios = require("axios");
const product = require("../models/product.model");
const mongoose = require("mongoose");
const CircularJSON = require("circular-json");
const https = require("https");

module.exports.getkasetprice = async (input) => {
  const { product_id } = input;
  console.log(product_id);
  const day = new Date();
  const today =
    day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
  const sevendayago = day.getFullYear() + "-" + (day.getMonth() + 1) + "-2";
  let url =
    "https://dataapi.moc.go.th/gis-product-prices?product_id=" +
    product_id +
    "&from_date=" +
    sevendayago +
    "&to_date=" +
    today;
  console.log(url);
  const agent = new https.Agent({ rejectUnauthorized: false });
  const price = await axios.get(url, { httpsAgent: agent }).then((res) => {
    let json = JSON.stringify(res.data);
    return json;
  });
  return price;
};
