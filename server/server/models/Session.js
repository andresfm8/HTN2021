const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
	id      : String,
	queue   : [ String ],
	host_id : String,
	size    : Number
});

const Session = mongoose.model('Session', SessionSchema);

module.exports = Session;
