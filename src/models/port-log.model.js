const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portlog = new Schema(
    {
        user_id: { type: String },
        price: { type: Number }
    },
    {
        strict: false,
        versionKey: false,
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
);

module.exports = mongoose.model("port-logs", portlog);

