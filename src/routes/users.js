var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

/* /users */
router.get('/register', usersController.register);
router.get('/login', usersController.login);

module.exports = router;
