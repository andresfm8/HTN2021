const express = require('express');
const router = express.Router();

const users = require('./users/users');
const spotify = require('./auth/spotify');

router.use('/api', users); 
router.use('/auth', spotify);


module.exports = router;