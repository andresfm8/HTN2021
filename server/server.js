const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const request = require('request');
const cors = require('cors');
const Sequelize = require('sequelize-cockroachdb');
const fs = require('fs');
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const uri = require('./config');
// const fetch = require('node-fetch');
const user_actions = require('./server/controllers/users/actions');

mongoose.connect(uri, {
	useNewUrlParser : true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
	console.log('connected to the db ;)');
});

require('dotenv').config();

app.use(cors());
app.use(express.json());

//
const api = require('./server/routes/api/main');

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (obj, done) {
	done(null, obj);
});

var access_token;
var refresh_token;

passport.use(
	new SpotifyStrategy(
		{
			clientID     : process.env.CLIENT_ID,
			clientSecret : process.env.CLIENT_SECRET,
			callbackURL  : 'http://localhost:4000/auth/spotify/callback'
		},
		function (accessToken, refreshToken, expires_in, profile, done) {
			process.nextTick(async function () {
				let formData = {
					name          : profile.displayName,
					spotify_id    : profile.id,
					email         : profile.emails,
					token         : accessToken,
					refresh_token : refreshToken
				};

				access_token = accessToken;
				refresh_token = refreshToken;

				await user_actions.create_user(formData);
				return done(null, profile);
			});
		}
	)
);

app.get('/', (req, res) => res.send('home'));
app.use('/', api);

app.get(
	'/auth/spotify',
	passport.authenticate('spotify', {
		scope      : [ 'user-read-email', 'user-read-private', 'user-modify-playback-state' ],
		showDialog : true
	})
);

app.get('/auth/spotify/callback', passport.authenticate('spotify', { failureRedirect: '/login' }), function (req, res) {
	// Successful authentication, redirect home.
	res.redirect(`http://localhost:3000/dashboard?access=${access_token}&refresh=${refresh_token}`);
});

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

app.listen(4000, () => {
	console.log('Listening on 4000');
});

module.exports = db;
