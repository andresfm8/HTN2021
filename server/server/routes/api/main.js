const express = require('express');
const router = express.Router();

const users = require('./users/users');

router.use('/api', users); 

module.exports = router;