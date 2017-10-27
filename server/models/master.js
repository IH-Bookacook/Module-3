const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MasterSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"]
  },
  yearFirstPublished: {
    type: Number
  },
  originalLanguage: {
    type: String
  },
  country: {
    type: String,
    required: [true, "country is required"]
  },
  genre: {
    type: String,
    required: [true, "genre is required"]
  },
  credits: [
    {
      artist: {
        type: Schema.Types.ObjectId,
        ref: "Artist"
      },
      role: {
        type: String
      }
    }
  ],
  awards: [
    {
      type: String
    }
  ],
  image: {
    type: String
  },
  publisher: [
    {
      type: Schema.Types.ObjectId,
      ref: "Publisher"
    }
  ],
  series: {
      type: Schema.Types.ObjectId,
      ref: "Series"
  },
  numInTheSeries: {
    type: String
  },
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  notes: {
    type: String,
    default: ""
  }
});


module.exports = mongoose.model("Master", MasterSchema);
