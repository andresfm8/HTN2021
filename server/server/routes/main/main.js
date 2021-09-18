const express = require('express');
const router = express.Router();
const users = require('./users/main');



router.use('/', users);

module.exports = router;
