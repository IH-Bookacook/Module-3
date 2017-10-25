const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeriesSchema = new Schema({
  name: {
    type: String
  },
  profile: {
    type: String
  }
});

module.exports = mongoose.model("Series", SeriesSchema);
