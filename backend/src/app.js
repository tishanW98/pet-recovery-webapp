require('dotenv').config()
const express = require('express') //done
const app = express()  //done
const createHttpError = require('http-errors')
const foundPetPersonRouter = require('./routes/foundPetPerson')
const lostPetOwnerRouter = require('./routes/lostPetOwner')
const petRouter = require('./routes/pet')
const foundpetRouter = require('./routes/foundPet')
const fileUpload = require('express-fileupload');

app.use(fileUpload());

app.use('/public/pets', express.static('public/pets'))

//cors
const cors = require('cors')
app.use(cors())

app.use(express.json())

app.use('/api/v1/foundPetPersons', foundPetPersonRouter);
app.use('/api/v1/lostPetOwners', lostPetOwnerRouter); 
app.use('/api/v1/pets', petRouter); 
app.use('/api/v1/foundpets', foundpetRouter); 

app.use((err,req,res, next) => {
  if (createHttpError.isHttpError(err)){
    res.status(err.status).send({message: err.message})
  }else{
    res.status(500).send({message: err.message})
  }
  //res.status(500).send({message: "Error Unknown"})
  
}); 

//app.post('/api/v1/foundPetPersons', )

module.exports = app;
