const express = require('express');
const router = express.Router();

router.get('/login', async () => {
	console.log('auth');
});

module.exports = router;
