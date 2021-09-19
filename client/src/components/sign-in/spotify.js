const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = 'ffbcecc74f594134a14ba26315bb3e70';

const scopes = [ 'streaming', 'user-read-email', 'user-read-private', 'user-modify-playback-state' ];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}`;
