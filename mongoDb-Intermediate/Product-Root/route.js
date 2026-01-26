const express = require('express');
const router = express.Router();
const {inStock,getProductState,getProductAnalizies} = require('../Controller/product-controller');

router.post("/stock", inStock);
router.get("/filter", getProductState);
router.get('/matching', getProductAnalizies);

module.exports = router;