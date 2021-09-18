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

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (obj, done) {
	done(null, obj);
});

passport.use(
	new SpotifyStrategy(
		{
			clientID     : process.env.CLIENT_ID,
			clientSecret : process.env.CLIENT_SECRET,
			callbackURL  : 'http://localhost:4000/auth/spotify/callback'
		},
		function (accessToken, refreshToken, expires_in, profile, done) {
			process.nextTick(function () {
				let formData = {
					name          : profile.displayName,
					spotify_id    : profile.id,
					email         : profile.emails,
					token         : accessToken,
					refresh_token : refreshToken
				};

				request.post({ url: 'http://localhost:4000/api/users/create', form: formData }, function (
					err,
					httpResponse,
					body
				) {
					if (err) console.error(err);
					console.log(body);
				});

				// request
				// 	.post({
				// 		url      : '/api/users/create',
				// 		formData : {
				// 			name          : profile.displayName,
				// 			spotify_id    : profile.id,
				// 			email         : profile.emails,
				// 			token         : accessToken,
				// 			refresh_token : refreshToken
				// 		}
				// 	})
				// 	// .then((res) => res.json())
				// 	// .then((res) => console.log(res));
				// console.log(profile.displayName);
				// console.log(accessToken);
				// console.log(refreshToken);
				// console.log(expires_in);
				return done(null, profile);
			});
		}
	)
);

app.get('/', (req, res) => res.send('home'));

app.get(
	'/auth/spotify',
	passport.authenticate('spotify', {
		scope      : [ 'user-read-email', 'user-read-private', 'user-modify-playback-state' ],
		showDialog : true
	})
);

app.get('/auth/spotify/callback', passport.authenticate('spotify', { failureRedirect: '/login' }), function (req, res) {
	// Successful authentication, redirect home.
	res.redirect('/');
});

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

app.listen(4000, () => {
	console.log('Listening on 4000');
});

module.exports = db;