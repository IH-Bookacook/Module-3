const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const publisherSchema = new Schema({
  name: {
    type: String
  },
  profile: {
    type: String
  }
});

publisherSchema.set("timestamps", true);

module.exports = mongoose.model("Publisher", publisherSchema);
