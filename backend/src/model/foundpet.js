const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//foundLocation, description, contactDetails, image

const foundpetSchema = new Schema({
  foundLocation:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  contactDetails:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: false
  }
});

const Foundpet =mongoose.model('Foundpet', foundpetSchema );

module.exports = Foundpet;