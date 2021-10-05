const express = require('express');
const router = express.Router();

router.get('/login', async () => {
	console.log('auth');
});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
