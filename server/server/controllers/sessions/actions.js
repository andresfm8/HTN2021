const Session = require('../../models/Session');
const uniqid = require('uniqid');

async function get_session (id) {
	const response = await Session.findOne({ where: { session_id: id } });
	return response;
}

async function create_session (user_id) {
	const session_id = uniqid();

	const session = Session.build({
		session_id : session_id,
		host_id    : user_id,
		queue      : [],
		size       : 0
	});

	return {
		status  : 'success',
		id      : session_id,
		session : session
	};
}

module.exports = { get_session, create_session };
