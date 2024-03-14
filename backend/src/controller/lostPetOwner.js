const lostPetOwnerModel = require('../model/lostPetOwner')
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

      const lostPetOwner = await lostPetOwnerModel.findOne({ email: email }).exec();

      if (!lostPetOwner) {
          throw createHttpError(400, 'User does not exist')
      }

      const isPasswordValid = await bcrypt.compare(password, lostPetOwner.password);

      if (!isPasswordValid) {
          throw createHttpError(400, 'Invalid credentials') 
      }

      const user = await lostPetOwnerModel.findOne({ email: email }).exec();

      const token = jwt.sign(
          {
              user_id: user._id,
              email: user.email,
          },
          process.env.JWT_TOKEN_KEY,
          {
              expiresIn: "4h",
          }
      )

      user.token = token;

      const result = await user.save();

      const response = {
        id: result._id,
        name: result.name,
        email: result.email,
        phoneNumber: result.phoneNumber,
        token: result.token,
        userType: "lostPetOwner"

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

    const isOwnerAvailable = await lostPetOwnerModel.findOne({email: email}).exec();
    if (isOwnerAvailable) {
      throw createHttpError(400, 'Owner already exist')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const lostPetOwner = new lostPetOwnerModel({
      email: email,
      name: name,
      password: hashedPassword,
      phoneNumber: phoneNumber
    })

    const result = await lostPetOwner.save();

    res.status(201).send(result);

  } catch (error) {
    next(error)
  }
}