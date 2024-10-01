const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile.js').development); // Initialize knex with your development configuration

router.get('/', function(req, res, next) {
    res.send("dela");
});

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    const user = await knex('uporabniki').where({ "username": username, "password": password }).first();

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    return res.json({ status: "success", userId: user.id });
});

module.exports = router;
