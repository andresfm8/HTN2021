const User = require('../../models/User');
const uniqid = require('uniqid');
async function get_user (id) {
	const response = await User.findOne({ where: { id: id } });
	return response;
}

async function create_user (data) {
	const id = uniqid();
	const name = data.name;
	const spotify_id = data.spotify_id;
	const email = data.email;
	const token = data.token;
	const refresh_token = data.refresh_token;
	const session_id = data.session_id;

	const user = User.build({ id, name, spotify_id, email, token, refresh_token, session_id });

	return {
		status : 'success',
		id     : id
	};
}

module.exports = { get_user, create_user };
