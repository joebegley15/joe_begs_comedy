const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pastShowsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  }
});

module.exports = pastShows = mongoose.model("pastShows", pastShowsSchema);
