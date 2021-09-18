const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	id            : String,
	name          : String,
	spotify_id    : String,
	email         : mongoose.Schema.Types.Mixed,
	sesion_id     : String,
	token         : String,
	refresh_token : String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
