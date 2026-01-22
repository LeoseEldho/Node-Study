const { uploadCloudinary } = require("../Helper/cloudinaryHelper");
const Image = require("../modules/image");
const { all } = require("../Router/home");

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }
    const { url, publicId } = await uploadCloudinary(req.file.path);
    const newImage = await Image.create({
      url,
        publicId,
       uploadedBy: req.userInfo.userId,
    });
    if (newImage) {
      res
        .status(200)
        .json({ message: "The Image has been Uploaded", data: newImage });
    }
  } catch (error) {
    console.log("there are some ", error);
  }
};

const fetchImage = async (req, res) => {
  const allImage = await Image.find({});
  if (!allImage) {
    return res.status(404).json({ message: "No image are there!" });
  }
  res.status(200).json({ message: "All Images Are ...", data: allImage });
};

module.exports = {uploadImage,fetchImage}
