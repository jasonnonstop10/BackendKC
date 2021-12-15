const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const product = new Schema(
  {
    product_id: { type: String, unique: true },
    product_name: { type: String },
    category_name: { type: String },
    sell_type: { type: String },
    product_price: { type: Number },
  },
  {
    strict: false,
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("product", product);
