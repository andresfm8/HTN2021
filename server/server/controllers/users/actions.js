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
// const setProfileData = async (profile, accessToken, refreshToken) => {
//   let formData = {
//     name: profile.displayName,
//     spotify_id: profile.id,
//     email: profile.emails,
//     token: accessToken,
//     refresh_token: refreshToken,
//   };

//   access_token = accessToken;
//   refresh_token = refreshToken;

//   await user_actions.create_user(formData);
// }

async function create_user (profile, accessToken, refreshToken) {
	const id = uniqid();
	const name = profile.name;
	const spotify_id = profile.spotify_id;
	const email = profile.email;
	const token = accessToken;
	const refresh_token = refreshToken;

	const check_name = await User.findOne({ name: name }).lean().exec();

	if (check_name) {
		const token = profile.token;
		const refresh_token = profile.refresh_token;

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
