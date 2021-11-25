const { findAll, findOnePrice } = require("../functions/kaset-price");

exports.findAll = async (req, res) => {
    const response = await findAll(req.query);
    res.send({
        data: response,
        total: response.length
    });
};

exports.findOnePrice = async (req, res) => {
    const response = await findOnePrice(req.query);
    response.date = response.price_list[0].date;
    delete response.price_list;
    res.send(response);
}