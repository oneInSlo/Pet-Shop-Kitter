const express = require('express');
const router = express.Router();
const knexConfig = require('../knexfile.js'); 
const knex = require('knex')(knexConfig.development); 

router.get('/', function(req, res, next) {
    res.send("dela");
});

router.post('/', async (req, res, next) => {

    const { id } = req.body;

    try {
        await knex('produkti').where({ id: id }).del();

        const products = await knex('produkti').select('*');

        res.json({ status: "success", products: products, message: "Product deleted successfully" });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
