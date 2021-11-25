const axios = require("axios");
const https = require("https");

module.exports.findAll = async (params) => {
    const { keyword } = params;
    const agent = new https.Agent({
        rejectUnauthorized: false,
    });
    const res = await axios.get(`https://dataapi.moc.go.th/gis-products?keyword=${encodeURI(keyword)}`, {
        httpsAgent: agent
    });

    return res.data;
};

module.exports.findOnePrice = async (params) => {
    const { productId, date } = params;
    const agent = new https.Agent({
        rejectUnauthorized: false,
    });
    const res = await axios.get(`https://dataapi.moc.go.th/gis-product-prices?product_id=${productId}&from_date=${date}&to_date=${date}`, {
        httpsAgent: agent
    });

    return res.data;
};