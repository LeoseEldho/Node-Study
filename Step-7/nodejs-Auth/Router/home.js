const express = require('express');

const router = express.Router();

router.get("/home", (req, res) => {
    
    res.status(200).json({message:"Welcome To The Home Page;"})
});

module.exports=router