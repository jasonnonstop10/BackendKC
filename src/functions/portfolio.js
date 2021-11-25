const axios = require("axios");
const mongoose = require("mongoose");
const portfolioModel = require("../models/portfolio.model");

module.exports.create = async (data) => {
    return await portfolioModel.create(data);
};

module.exports.update = async (data, user_id) => {
    return await portfolioModel.findOneAndUpdate(user_id, data);
}

module.exports.fineOneData = async (input) => {
    const { userId } = input;
    return await portfolioModel.findOne({p_user_id: userId});
}