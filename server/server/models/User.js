const sequelize = require('../../server');
const Sequelize = require('sequelize-cockroachdb');


const User = sequelize.define('users', {
	id            : {
		type       : Sequelize.INTEGER,
		primaryKey : true
	},
	name          : {
		type : Sequelize.STRING
	},
	spotify_id    : {
		type : Sequelize.STRING
	},
	email         : {
		type : Sequelize.STRING
	},
	session_id    : {
		type : Sequelize.STRING
	},
	token         : {
		type : Sequelize.STRING
	},
	refresh_token : {
		type : Sequelize.STRING
	}
});

User.sync();

module.exports = User;
