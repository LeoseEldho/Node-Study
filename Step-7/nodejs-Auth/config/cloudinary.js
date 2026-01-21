const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloudName: process.env.CLOUD_NAME,
    cloudApiKey: process.env.API_KEY,
    cloudApiSecret: process.env.API_SECRET
});

module.exports=cloudinary