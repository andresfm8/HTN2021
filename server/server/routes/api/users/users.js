const express = require('express');
const router = express.Router();
const actions = require('../../../controllers/users/actions');

// all endpoints are prefixed with '/api'

router.get('/users', async (req, res) => {
	try {
		const response = await actions.get_users();
		res.status(200).json(response);
	} catch (err) {
		console.error(err);
	}
});

router.get('/users/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const response = await actions.get_user(id);
		res.status(200).json(response);
	} catch (err) {
		console.error(err);
	}
});

router.post('/users/create', async (req, res) => {
	try {
		console.log(req);
		const data = req.body.data;

		// console.log(data);

		const response = await actions.create_user(data);
		res.status(201).json(response);
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;
