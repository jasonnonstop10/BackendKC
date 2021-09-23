const axios = require("axios");
module.exports.getkasetprice = async () => {
  const input_data = "P11001";
  const currentdate = "2021-09-23";
  const sevendayage = "2021-09-21";
  const price = axios.get(
    `https://dataapi.moc.go.th/gis-product-price?product_id=${input_data}&from_date=${sevendayage}&to_date=${currentdate}`
  );
  return price;
};
