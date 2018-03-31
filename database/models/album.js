// Todo: create Album Schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title : String,
  date  : Date,
  copiesSold : Number,
  numberTracks: Number,
  image : String, //reference to the image
  revenue : Number
});

module.exports = albumSchema;
