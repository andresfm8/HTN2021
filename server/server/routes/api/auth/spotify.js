const express = require('express');
const router = express.Router();
const passport = require("passport");

// all endpoints are prefixed with '/auth'
var access_token;
var refresh_token;
//TODO: Create controllers
router.get(
  "/spotify",
  passport.authenticate("spotify", {
    scope: [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
    ],
    showDialog: true,
  })
);

router.get(
  "/spotify/callback",
  passport.authenticate("spotify", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    //Need to refactor this so we can get access_token and refres_token
    res.redirect(
      `http://localhost:3000/dashboard?access=${access_token}&refresh=${refresh_token}`
    );
  }
);

module.exports = router;