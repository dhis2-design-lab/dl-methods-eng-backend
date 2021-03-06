const {service} = require('../../data-access/file')
const {uploadImage, deleteImage} = require('../../cloudinary')

const makeUploadAnImage = require('./upload-an-image')
const uploadAnImage = makeUploadAnImage({service, uploadImage, FError})

const makeUploadedImageToDB = require('./uploaded-image-to-db')
const uploadedImageToBD = makeUploadedImageToDB({service})

const makeGetAllFiles = require('./get-all-files') 
const getAllFiles = makeGetAllFiles({service})

const makeGetByIDFile = require('./get-by-id-file')
const getByIDFile = makeGetByIDFile({service, FError})


// const makeUpdateProcessElement = require('./update-a-process-element')
// const updateProcessElement = makeUpdateProcessElement({service, getByIDProcessElements})

const makeDeleteFile = require('./delete-a-file')
const deleteOneFile = makeDeleteFile({service, deleteImage, FError})

module.exports = {
    uploadAnImage,
    uploadedImageToBD,
    getAllFiles,
    getByIDFile,
    // updateFile,
    deleteOneFile
}

function FError(message, options = {}){
    this.message = message

    if(options){
        const {status} = options
        this.status = status
    }
}