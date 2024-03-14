const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//petID, breed, color, description, image, ownerPhoneNumber
const lostReportSchema = new Schema({
  
  
  lostPetOwner:{
    type: Schema.Types.ObjectId,
    ref: 'lostPetOwner',
    required: true,
  },
  pet:{
    type: Schema.Types.ObjectId,
        ref: 'pet',
        required: true,
  },
  description:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  date:{
    type: String,
    required: true
  }
  
});

const LostReport =mongoose.model('LostReport', lostReportSchema );

module.exports = LostReport;