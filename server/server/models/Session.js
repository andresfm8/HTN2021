const sequelize = require('../../server');
const Sequelize = require('sequelize-cockroachdb');


const Session = sequelize.define('sessions', {
	session_id : {
		type : Sequelize.STRING
	},
	queue      : {
		type : Sequelize.ARRAY(Sequelize.STRING)
	},
	host_id    : {
		type : Sequelize.INTEGER
	},
	size       : {
		type : Sequelize.INTEGER
	}
});

Session.sync();

module.exports = Session;
