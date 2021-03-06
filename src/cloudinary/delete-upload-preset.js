module.exports = ({cloudinary}) => {
    return function deleteUploadPreset(presetName){
        return cloudinary.api.delete_upload_preset(presetName, (error, result) => {
            if (error){
                return Promise.reject(error)
            }

            return Promise.resolve(result)
        })
    }
}