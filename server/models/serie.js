const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serieSchema = new Schema({
  name: {
    type: String
  },
  profile: {
    type: String
  }
});

serieSchema.set("timestamps", true);

module.exports = mongoose.model("Serie", serieSchema);
