const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kasetplan = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
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

module.exports = mongoose.model("kasetplan", kasetplan);
