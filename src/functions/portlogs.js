const axios = require("axios");
const mongoose = require("mongoose");
const portlogsModel = require("../models/port-log.model");

module.exports.create = async (data) => {
    return await portlogsModel.create(data);
};

module.exports.update = async (data, user_id) => {
    return await portlogsModel.findOneAndUpdate(user_id, data);
}

module.exports.findAll = async (input) => {
    const { userId } = input;
    return await portlogsModel.find({user_id: userId});
}