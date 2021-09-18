const User = require('../../models/User');
const uniqid = require('uniqid');

async function get_user (id) {
	const response = await User.findOne({ id: id });
	return response;
}

async function get_users () {
	const response = await User.find({});
	return response;
}

async function create_user (data) {
	const id = uniqid();
	const name = data.name;
	const spotify_id = data.spotify_id;
	const email = data.email;
	const token = data.token;
	const refresh_token = data.refresh_token;

	const check_name = await User.findOne({ name: name }).lean().exec();

	if (check_name) {
		const token = data.token;
		const refresh_token = data.refresh_token;

		const res = await User.updateOne({ name: name }, { token: token, refresh_token: refresh_token }).lean().exec();

		return {
			id            : check_name.id,
			token,
			refresh_token
		};
	}

	const user = await User.create({
		id            : id,
		name          : name,
		spotify_id    : spotify_id,
		email         : email,
		token         : token,
		refresh_token : refresh_token
	});

	return {
		id,
		token,
		refresh_token
	};
}

module.exports = { get_user, create_user, get_users };
