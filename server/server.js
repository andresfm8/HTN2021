const express = require('express');
const app = express();
const spotifyAPI = require('spotify-web-api-node');
const dotenv = require('dotenv');
const scopes = [
	'user-read-private',
	'user-read-email',
	'user-read-playback-state',
	'user-modify-playback-state',
	'user-read-currently-playing'
];

console.log(process.env.CLIENT_ID);

const spotify = new spotifyAPI({
	clientId     : process.env.CLIENT_ID,
	clientSecret : process.env.CLIENT_SECRET,
	redirectUri  : 'http://localhost:4000'
});

var stateKey = 'spotify_auth_state';

var auth_string = spotify.createAuthorizeURL(scopes, stateKey);
console.log(auth_string);
const main = require('./server/routes/main/main');

app.use('/', main);

app.listen(4000, () => console.log('Listening on 4000'));
