const { createAuther, createBook,bookWithAuthor } = require('../Controller/controllerData');
const express = require('express');

const route = express.Router();

route.post('/auther', createAuther)
route.post('/book', createBook)
route.get('/book/:id',bookWithAuthor)

module.exports = route;