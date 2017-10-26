const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
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

artistSchema.set("timestamps", true);

module.exports = mongoose.model("Artist", artistSchema);
