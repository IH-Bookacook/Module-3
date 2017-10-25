const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PublisherSchema = new Schema({
  name: {
    type: String
  },
  profile: {
    type: String
  }
});

module.exports = mongoose.model("Publisher", PublisherSchema);
