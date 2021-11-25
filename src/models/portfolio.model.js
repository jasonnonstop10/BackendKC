const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const item = {
    product_id: { type: String },
    name: { type: String },
    volume: { type: Number },
    price: { type: Number }
};

const portfolio = new Schema(
    {
        p_user_id: { type: String },
        items: [item],
    },
    {
        strict: false,
        versionKey: false,
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
);

module.exports = mongoose.model("portfolios", portfolio);

