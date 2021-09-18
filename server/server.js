const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const request = require('request');
const cors = require('cors');

const Sequelize = require('sequelize-cockroachdb');
const fs = require('fs');
const { QueryTypes } = require('sequelize-cockroachdb');

const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.listen(4000, () => {
	console.log('Listening on 4000');
});

app.use(
  session({secret: 'keyboard cat', resave: true, saveUninitialized: true})
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

var sequelize = new Sequelize({
	dialect        : 'postgres',
	username       : process.env.DB_USERNAME,
	password       : process.env.DB_PASSWORD,
	host           : process.env.DB_HOST,
	port           : process.env.DB_PORT,
	database       : process.env.DATABASE,
	dialectOptions : {
		ssl : {
			rejectUnauthorized : false,
			// For secure connection:
			ca                 : fs.readFileSync('certs/root.crt').toString()
		}
	},
	logging        : false
});

passport.use(
	new SpotifyStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: 'http://localhost:4000/auth/spotify/callback'
		},
		function(accessToken, refreshToken, expires_in, profile, done) {
			process.nextTick(function () {
				console.log(profile);
				console.log(accessToken);
				console.log(expires_in);
        return done(null, profile);
      });
		}
	)
);

app.get('/', (req, res) => res.send("home"));

app.get(
  '/auth/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
		showDialog: true,
  })
);

app.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = sequelize;
