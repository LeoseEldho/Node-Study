const cloudinary = require('../config/cloudinary');

const uploadCloudinary = async(filepath) =>{
    try {
        const result = await cloudinary.uploader.upload(filepath);
        return {
            url:  result.secure_url,
            publicId: result.publicId,
        };
    } catch (error) {
        console.log(error,"Uploading the file Failed")
    }
};
module.exports={uploadCloudinary}