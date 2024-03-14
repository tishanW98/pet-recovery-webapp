const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//petName, breed, ownerName, address, image, petID

const petSchema = new Schema({
  petName:{
    type: String,
    required: true
  },
  breed:{
    type: String,
    required: true
  },
  ownerName:{
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: false
  }
});

const Pet =mongoose.model('Pet', petSchema );

module.exports = Pet;