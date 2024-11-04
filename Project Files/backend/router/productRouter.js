const express = require('express');
const router = express.Router();
const Category = require('../models/products_db'); 
const {getItems, addItems} = require('../controllers/product-controller');

router.get('/categories', getItems);

router.post('/categories', addItems);

module.exports = router;