const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  // the username and password are added by passportLocalMongoose
  // we can add any extra information like facebooktokens (or
  // others) as well as a picture, etc
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  isAdministrator: {
    type: Boolean,
    default: false
  },
  avatar: String
});

userSchema.set("timestamps", true);

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
