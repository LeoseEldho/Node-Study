const {allProduct,productById,addProduct,UpdateProduct,deleteProduct}=require('../controller/route-controler')
const express = require('express')

const router=express.Router()
router.get('/', allProduct);
router.get('/:id', productById);
router.post('/add', addProduct);
router.put('/update/:id', UpdateProduct);
router.delete('/delete/:id', deleteProduct);

module.exports=router