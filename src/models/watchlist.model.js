const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const item = {
  product_id: { type: String },
  name: { type: String },
  price: { type: Number }
};

const watchlist = new Schema(
  {
    no: { type: Number },
    watchlist_no: {
      type: [item],
    },
    uid: { type: mongoose.ObjectId },
    deleteAt: {
      type: Date,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    strict: false,
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("watchlist", watchlist);
