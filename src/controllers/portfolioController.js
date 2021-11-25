const { create, update, fineOneData } = require("../functions/portfolio");

exports.create = async (req, res) => {
    const { userId } = req;
    req.body.p_user_id = userId;
    const response = await create(req.body);
    res.send(response);
};

exports.update = async (req, res) => {
    const { userId } = req;
    const response = await update(req.body, userId);
    res.send(response);
};

exports.findOne = async (req, res) => {
    const response = await fineOneData(req);
    if (response) {
        res.send(response);
    } else {
        res.send({});
    }
    
};