const mongoose = require("mongoose");
const Geojson = require("mongoose-geojson-schema");
const Schema = mongoose.Schema;

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
  price: {
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
    geojson: mongoose.Schema.Types.Polygon,
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
