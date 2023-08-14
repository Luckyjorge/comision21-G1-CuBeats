const express = require('express');
const indexController = require('../controllers/indexController');
const router = express.Router();

/* GET home page. */
router.get('/', indexController.index);
router.get('/admin', indexController.admin);
router.get('/create-beat', indexController.addProduct);
router.get('/edit-beat', indexController.editProduct);
module.exports = router;
