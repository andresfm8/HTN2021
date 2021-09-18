const spotify = require('../server');

async function request_token () {
	spotify.refreshAccessToken().then(function (data) {
		spotify.setAccessToken(data.body['access_token']);
	});
}

module.exports = { request_token };
