const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();

const spotifyAPI = require('spotify-web-api-node');
const scopes = [
	'user-read-private',
	'user-read-email',
	'user-read-playback-state',
	'user-modify-playback-state',
	'user-read-currently-playing'
];

const spotify = new spotifyAPI({
	clientId     : process.env.CLIENT_ID,
	clientSecret : process.env.CLIENT_SECRET,
	redirectUri  : `${process.env.DEV_URL}/callback`
});

var stateKey = 'spotify_auth_state';

var auth_string = spotify.createAuthorizeURL(scopes, stateKey);
console.log(auth_string);
const main = require('./server/routes/main/main');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', main);

app.get('/callback', (req, res) => {
	const code = req.query.code;

	spotify.authorizationCodeGrant(code).then((data) => {
		console.log('The token is', data.body['access_token']);
		console.log('The expiry is', data.body['expires_in']);

		spotify.setAccessToken(data.body['access_token']);
		spotify.setRefreshToken(data.body['refresh_token']);
	});
	res.send('auth complete');
});

app.listen(4000, () => console.log('Listening on 4000'));

module.exports = spotify;
