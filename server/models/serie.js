const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serieSchema = new Schema({
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

serieSchema.set("timestamps", true);

module.exports = mongoose.model("Series", serieSchema);
