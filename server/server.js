const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const cors = require('cors');
const spotifyWebAPI = require('spotify-web-api-node');

require('dotenv').config();

const spotifyAPI = require('spotify-web-api-node');
const Sequelize = require('sequelize-cockroachdb');
const fs = require('fs');

require('dotenv').config();

app.use(cors());
app.use(express.json());

const credentials = {
	clientId     : process.env.CLIENT_ID,
	clientSecret : process.env.CLIENT_SECRET,
	redirectUri  : 'http://localhost:3000/'
};

app.post('/login', (req, res) => {
	let spotify = new spotifyWebAPI(credentials);
	const code = req.body.code;

	spotify
		.authorizationCodeGrant(code)
		.then((data) => {
			res.json({
				access_token : data.body.access_token
			});
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(400);
		});
});

app.listen(4000, () => {
	console.log('Listening on 4000');
});

// var sequelize = new Sequelize({
// 	dialect        : 'postgres',
// 	username       : process.env.USERNAME,
// 	password       : process.env.PASSWORD,
// 	host           : process.env.DB_HOST,
// 	port           : process.env.DB_PORT,
// 	database       : process.env.DATABASE,
// 	dialectOptions : {
// 		ssl : {
// 			rejectUnauthorized : false,
// 			// For secure connection:
// 			ca                 : fs.readFileSync('certs/root.crt').toString()
// 		}
// 	},
// 	logging        : false
// });
