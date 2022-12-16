const express = require('express');
const { home } = require('../controllers/user');
// importing router from express
const router = express.Router();


router.get('/user', home);


module.exports = router;