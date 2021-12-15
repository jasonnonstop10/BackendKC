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

module.exports.getSummaryItems = async (input) => {
    const { userId } = input;
    const res = await portfolioModel.aggregate([
        { $match: {p_user_id: userId} },
        { $project: { _id: 0, items: 1 } },
        { $unwind: '$items' },
        { $replaceRoot: { newRoot: '$items' } },
        { $group: {
            _id: { $sum: { $multiply: [ "$volume", "$price" ] } }
        }},
    ]);

    let price = 0;
    res.forEach((value) => {
        price += value._id;
    });
    return price;
}