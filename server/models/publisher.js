const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const publisherSchema = new Schema({
  name: {
    type: String
  },
  profile: {
    type: String
  },
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

publisherSchema.set("timestamps", true);

module.exports = mongoose.model("Publisher", publisherSchema);
