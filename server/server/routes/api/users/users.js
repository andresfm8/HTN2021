const express = require('express');
const router = express.Router;
const actions = require('../../../controllers/users/actions');

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
		const data = req.body.data;

		const response = await actions.create_user(data);
		res.status(201).json(response);
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;
