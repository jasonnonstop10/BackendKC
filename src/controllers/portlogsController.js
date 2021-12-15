const { create, update, findAll } = require("../functions/portlogs");

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

exports.findAll = async (req, res) => {
    const response = await findAll(req);
    res.send({
        data: response,
        total: response.length
    });
};