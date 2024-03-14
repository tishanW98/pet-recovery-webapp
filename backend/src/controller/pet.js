const createHttpError = require('http-errors')
const PetModel = require('../model/pet')
const mongoose = require('mongoose')


exports.create = async (req, res, next) => {
    const {
        petName,
        breed,
        ownerName,
        address
    } = req.body;
    try {
        const { image } = req.files;
        if (!image) {
            throw createHttpError(404, "Image not found")
        }
        if(!image.mimetype.startsWith('image')) {
            throw createHttpError(404, "Only images are allowed")

        }
        let filepath = __dirname + '/../../public/pets/' + image.name
        image.mv(filepath);
        
        let filepathtoUpload = '/public/pets/' + image.name
    
        if (!petName || !breed || !ownerName || !address) {
            throw createHttpError(400, 'Please provide all the required fields');
        }

        const pet = new PetModel({
            petName,
            breed,
            ownerName,
            address,
            image: filepathtoUpload,
        });

        const result = await pet.save();

        res.status(201).send(result);

    } catch (error) {
        next(error)
    }

}

exports.update = async (req, res, next) => {
    const petId = req.params.id;

    const {
        petName,
        breed,
        ownerName,
        address
    } = req.body;

    try {
        if (!mongoose.isValidObjectId(petId)) {
            throw createHttpError(400, "Invalid Id");
        }

        if (!petName || !breed || !ownerName || !address) {
            throw createHttpError(400, 'Please provide all the required fields');
        }

        const { image } = req.files;
        let filepath;
        let filepathtoUpload;

        if (image) {
            if (!image.mimetype.startsWith('image')) {
                throw createHttpError(400, "Only images are allowed");
            }
            filepath = __dirname + '../../../public/pets/' + image.name; // Corrected image.name
            image.mv(filepath);

            filepathtoUpload = '/public/pets/' + image.name; // Corrected image.name
        }

        const pet = await PetModel.findById(petId).exec();

        if (!pet) {
            throw createHttpError(404, 'Pet not found');
        }

        pet.petName = petName;
        pet.breed = breed;
        pet.ownerName = ownerName;
        pet.address = address;
        if (image) {
            pet.image = filepathtoUpload;
        }

        const result = await pet.save();

        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
};


exports.delete = async (req, res, next) => {

    const petId = req.params.id;
    //params localhost:3000/api/v1/products/1234
    //query localhost:3000/api/v1/products?id=1234

    try {
        if (!mongoose.isValidObjectId(petId)) {
            throw createHttpError(400, "Invalid Id")
        }

        const result = await PetModel.findByIdAndDelete(petId).exec();

        if (!result) {
            throw createHttpError(404, 'Pet not found');
        }

        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.getAll = async (req, res, next) => {

    try {
        const result = await PetModel.find().exec();
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.getOne = async (req, res, next) => {
    const Id = req.params.id;

    try {

        if (!mongoose.isValidObjectId(Id)) {
            throw createHttpError(400, "Invalid Id")
        }

        const result = await PetModel.findById(Id).exec();

        if (!result) {
            throw createHttpError(404, 'Pet not found');
        }

        res.status(200).send(result);


    } catch (error) {
        next(error)
    }

}

exports.search = async (req, res, next) => {
    const query = req.query.q;

    try {

        if (!query) {
            throw createHttpError(400, "Please provide a search query")
        }

        const result = await PetModel.find({ petName: { $regex: query, $options: 'i' } }).exec();

        if (!result) {
            throw createHttpError(404, 'Product not found');
        }

        res.status(200).send(result);

    } catch (error) {
        next(error)
    }
}