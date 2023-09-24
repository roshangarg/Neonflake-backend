const { Schema, default: mongoose } = require("mongoose");

const thumbnailSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  thumbnailUrl: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
});

module.exports = mongoose.model("ThumbnailModel", thumbnailSchema);
