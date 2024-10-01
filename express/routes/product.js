const express = require('express');
const router = express.Router();
const knex = require('knex'); // Require Knex library

// Import Knex configuration from knexfile.js and select the development configuration
const knexConfig = require('../knexfile.js').development;

// Initialize Knex with the configuration
const db = knex(knexConfig);

router.get('/', async (req, res) => {
    try {
        const products = await db('produkti').select('*');
        res.json(products);
    } catch (error) {
        console.error('Error fetching product data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
