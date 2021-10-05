const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const watchlist = new Schema(
  {
    no: { type: Number },
    watchlist_no: {
      type: [String],
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
