const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//name, email, password, phoneNumber, address

const foundPetPersonSchema = new Schema({
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

const FoundPetPerson = mongoose.model('FoundPetPerson', foundPetPersonSchema );

module.exports = FoundPetPerson;