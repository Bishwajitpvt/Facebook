const express = require('express');
const { register } = require('../controllers/user');
// importing router from express
const router = express.Router();


router.post('/register', register);


module.exports = router;