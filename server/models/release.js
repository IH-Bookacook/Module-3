const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const releaseSchema = new Schema({
  master: {
    type: Schema.Types.ObjectId,
    ref: "Master"
  },
  releaseCountry: {
    type: String
  },
  releaseYear: {
    type: Number
  },
  reference: {
    type: String
  },
  ISBN: {
    type: String
  },
  releaseLanguage: {
    type: String
  },
  isTranslation: {
    type: Boolean
  },
  translator: {
    type: Schema.Types.ObjectId,
    ref: "Artist"
  },
  format: {
    type: String
  },
  coverType: {
    type: String
  },
  isFirstIssue: {
    type: Boolean
  },
  isCountryFirstIssue: {
    type: Boolean
  },
  image: {
    type: String
  },
  notes: {
    type: String
  },
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  releasePublisher: [
    {
      type: Schema.Types.ObjectId,
      ref: "Publisher"
    }
  ]
});

releaseSchema.set("timestamps", true);

module.exports = mongoose.model("Release", releaseSchema);
