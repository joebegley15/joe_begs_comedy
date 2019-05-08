const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },
  location: {
    type: String,
    required: true
  }
});

module.exports = Show = mongoose.model("show", ShowSchema);
