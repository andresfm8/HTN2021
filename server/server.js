const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

require('dotenv').config();

const spotifyAPI = require('spotify-web-api-node');
const Sequelize = require("sequelize-cockroachdb");
const fs = require('fs');

require('dotenv').config();

const scopes = [
	'user-read-private',
	'user-read-email',
	'user-read-playback-state',
	'user-modify-playback-state',
	'user-read-currently-playing'
];

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = `${process.env.DEV_URL}/callback`;

const spotify = new spotifyAPI({
	clientId     : client_id,
	clientSecret : client_secret,
	redirectUri  : redirect_uri
});

var stateKey = 'spotify_auth_state';

const main = require('./server/routes/main/main');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', main);

app.get('/login', (req, res) => {
	var auth_string = spotify.createAuthorizeURL(scopes, stateKey);
	res.send(`<a>${auth_string}</a>`);
});

app.get('/callback', (req, res) => {
	const code = req.query.code;

	spotify.authorizationCodeGrant(code).then((data) => {
		access_token = data.body['access_token'];
		refresh_token = data.body['refresh_token'];
		res.send({
			'access-token'  : data.body['access_token'],
			'refresh-token' : data.body['refresh_token'],
			refresh       : `/refresh_token?access_token=${data.body['access_token']}&refresh_token=${data.body[
				'refresh_token'
			]}`
		});
	});
});

app.get('/refresh_token', (req, res) => {
	var refresh_token = req.query.refresh_token;
	var access_token = req.query.access_token;

	var authOptions = {
		url     : 'https://accounts.spotify.com/api/token',
		headers : { Authorization: 'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64') },
		form    : {
			grant_type    : 'refresh_token',
			refresh_token : refresh_token
		},
		json    : true
	};

	request.post(authOptions, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			var access_token = body.access_token;
			res.send({
				access_token : access_token
			});
		} else {
			res.send('error');
		}
	});
});

app.listen(4000, () => console.log('Listening on 4000'));


var sequelize = new Sequelize({
	dialect: "postgres",
	username: process.env.USERNAME,
	password: process.env.PASSWORD ,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DATABASE,
	dialectOptions: {
	  ssl: {
		rejectUnauthorized: false,
		// For secure connection:
		ca: fs.readFileSync('certs/root.crt')
				  .toString()
	  },
	},
	logging: false,
  });
