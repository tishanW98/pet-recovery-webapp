const foundPetPersonModel = require('../model/foundPetPerson')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.login = async (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  try {
      if (!email || !password) {
          throw createHttpError(400, 'Missing required parameters')
      }

      const foundPetPerson = await foundPetPersonModel.findOne({ email: email }).exec();

      if (!foundPetPerson) {
          throw createHttpError(400, 'User does not exist')
      }

      const isPasswordValid = await bcrypt.compare(password, foundPetPerson.password);

      if (!isPasswordValid) {
          throw createHttpError(400, 'Invalid credentials') 
      }

      const person = await foundPetPersonModel.findOne({ email: email }).exec();

      const token = jwt.sign(
          {
              user_id: person._id,
              email: person.email,
          },
          process.env.JWT_TOKEN_KEY,
          {
              expiresIn: "4h",
          }
      )

      person.token = token;

      const result = await person.save();

      const response = {
        id: result._id,
        name: result.name,
        email: result.email,
        phoneNumber: result.phoneNumber,
        token: result.token,
        userType: "foundPetPerson"

      }

      console.log(response);

      res.status(200).send(result);

  } catch (error) {
      next(error)
  }
}


exports.register = async (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  const name = req.body.name
  const phoneNumber = req.body.phoneNumber
  try {
    if(!email || !password || !name || !phoneNumber){
      throw createHttpError(400, 'Missing required details')
    }

    const isUserAvailable = await foundPetPersonModel.findOne({email: email}).exec();
    if (isUserAvailable) {
      throw createHttpError(400, 'User already exist')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foundPetPerson = new foundPetPersonModel({
      email: email,
      name: name,
      password: hashedPassword,
      phoneNumber: phoneNumber
    })

    const result = await foundPetPerson.save();

    res.status(201).send(result);

  } catch (error) {
    next(error)
  }
}
