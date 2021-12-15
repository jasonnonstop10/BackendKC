const { findAll, create  } = require("../functions/region");

exports.findAll = async (req, res) => {
    const response = await findAll();
    res.send({
        data: response,
        total: response.length
    });
};

exports.create = async (req, res) => {
    const response = await create(req.body);
    res.send(response);
};