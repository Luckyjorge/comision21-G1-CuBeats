const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

/* /products */
router.get('/product/:id?', productsController.product);
router.get('/shoppingCart', productsController.shoppingCart);

module.exports = router;
