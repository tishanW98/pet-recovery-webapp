const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//name, email, password, phoneNumber, address

const lostPetSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  phoneNumber:{
    type: String,
    required: true
  },
  address:{
    type: String,
    required: false
  },
  token:{
    type: String,
    required: false
  }
});

const LostPetOwner =mongoose.model('LostPetOwner', lostPetSchema );

module.exports = LostPetOwner;