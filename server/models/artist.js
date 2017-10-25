const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: {
    type: String
  },
  birth: {
    type: Number
  },
  death: {
    type: Number
  },
  profile: {
    type: String
  },
  award: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model("Artist", ArtistSchema);
