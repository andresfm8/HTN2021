const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;

const {create_user} = require("../../controllers/users/actions");


require("dotenv").config();

const setSpotifyAuth = () => {
  passport.use(
    new SpotifyStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:4000/auth/spotify/callback",
      },
      function (accessToken, refreshToken, expires_in, profile, done) {
        process.nextTick(async function () {
          create_user(profile, accessToken, refreshToken);
          return done(null, profile);
        });
      }
    )
  );
}

module.exports = {setSpotifyAuth};