const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regions = new Schema(
    {
        name_thai: { type: String },
        name_eng: { type: String }
    },
    {
        strict: false,
        versionKey: false,
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
);

module.exports = mongoose.model("regions", regions);

