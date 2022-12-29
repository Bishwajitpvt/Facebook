const express = require('express');
const { register , activateAccount} = require('../controllers/user');
// importing router from express
const router = express.Router();


router.post('/register', register);
router.post('/activate', activateAccount);

module.exports = router;