const express = require('express');
const router = express.Router();
const {allBook,bookById,addBook,updateBook,deleteBook}=require('../controller/book-controller')

router.get('/get', allBook);
router.get('/get/:id',bookById);
router.post('/add',addBook);
router.put('/update/:id',updateBook);
router.get('/delete/:id', deleteBook);

module.exports = router;