const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plant = new Schema(
  {
    plant_id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    photo: {
      type: String,
    },
    planttime: {
      type: Number,
    },
    plantpersqrmeter: {
      type: Number,
    },
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

module.exports = mongoose.model("plant", plant);
