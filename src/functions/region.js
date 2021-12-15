const mongoose = require("mongoose");
const regionModel = require("../models/region.model");

module.exports.findAll = async () => {
    return await regionModel.find().sort({name_eng: 1});
};

module.exports.create = async (data) => {
    return await regionModel.create(data);
};