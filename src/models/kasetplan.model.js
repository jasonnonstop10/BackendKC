const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const geojson = {
  type: {
    type: String,
    enum: ["Polygon"],
  },
  coordinates: {
    type: [[[Number]]],
  },
};

const asset = {
  plant_id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  volume: {
    type: Number,
  },
  day: {
    type: Number,
  },
  auto: {
    type: Boolean,
    enum: [true, false],
  },
};
const kasetplan = new Schema(
  {
    no: {
      type: Number,
    },
    geojson: {
      type: geojson,
    },
    asset: {
      type: [asset],
    },
    esimate: {
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
