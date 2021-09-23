const axios = require("axios");
module.exports.getkasetprice = async (input) => {
  const input_data = input;
  const currentdate = "2021-09-23";
  const sevenagoyage = "2021-08-21";
  const price = axios.get(
    `https://dataapi.moc.go.th/gis-product-price?product_id=${input_data}&from_date=${sevenagoyage}&to_date=${currentdate}`
  );
  return price.price_min_avg, price.price_max_avg;
};
