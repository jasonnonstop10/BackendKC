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
    default: 0
  },
  day: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 0
  },
  auto: {
    type: Boolean,
    enum: [true, false],
    default: false
  },
  photo: {
    type: String,
  },
};
const kasetplan = new Schema(
  {
    no: {
      type: Number,
      default: 0
    },
    geojson: mongoose.Schema.Types.Polygon,
    asset: {
      type: [asset],
    },
    esimate: {
      type: Number,
      default: 0
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
