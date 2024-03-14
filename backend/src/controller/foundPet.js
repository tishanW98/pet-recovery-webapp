const createHttpError = require('http-errors')
const FoundpetModel = require('../model/foundpet')
const mongoose = require('mongoose')

exports.create = async (req, res, next) => {
    const {
        foundLocation,
        description,
        contactDetails,
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
    
        if (!foundLocation || !description || !contactDetails) {
            throw createHttpError(400, 'Please provide all the required fields');
        }

        const foundpet = new FoundpetModel({
            foundLocation,
            description,
            contactDetails,
            image: filepathtoUpload,
        });

        const result = await foundpet.save();

        res.status(201).send(result);

    } catch (error) {
        next(error)
    }

}

exports.update = async (req, res, next) => {
    const foundpetId = req.params.id;

    const {
        foundLocation,
        description,
        contactDetails,
    } = req.body;

    try {
        if (!mongoose.isValidObjectId(foundpetId)) {
            throw createHttpError(400, "Invalid Id");
        }

        if (!foundLocation || !description || !contactDetails) {
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

        const foundpet = await FoundpetModel.findById(foundpetId).exec();

        if (!foundpet) {
            throw createHttpError(404, 'Pet not found');
        }

        foundpet.foundLocation = foundLocation,
        foundpet.description = description,
        foundpet.contactDetails = contactDetails
        if (image) {
            foundpet.image = filepathtoUpload;
        }

        const result = await foundpet.save();

        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
};


exports.delete = async (req, res, next) => {

    const foundpetId = req.params.id;
    //params localhost:3000/api/v1/products/1234
    //query localhost:3000/api/v1/products?id=1234

    try {
        if (!mongoose.isValidObjectId(foundpetId)) {
            throw createHttpError(400, "Invalid Id")
        }

        const result = await FoundpetModel.findByIdAndDelete(foundpetId).exec();

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
        const result = await FoundpetModel.find().exec();
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.getOne = async (req, res, next) => {
    const PId = req.params.id;

    try {

        if (!mongoose.isValidObjectId(PId)) {
            throw createHttpError(400, "Invalid Id")
        }

        const result = await FoundpetModel.findById(PId).exec();

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

        const result = await FoundpetModel.find({ name: { $regex: query, $options: 'i' } }).exec();

        if (!result) {
            throw createHttpError(404, 'Product not found');
        }

        res.status(200).send(result);

    } catch (error) {
        next(error)
    }
}