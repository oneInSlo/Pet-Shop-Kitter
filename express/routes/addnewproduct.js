const express = require('express');
const router = express.Router();
const knexConfig = require('../knexfile.js'); 
const knex = require('knex')(knexConfig.development); 

router.get('/', function(req, res, next) {
    res.send("dela");
});

router.post('/', async (req, res, next) => {

    const { name, price, nutrition, src, discount } = req.body;

    try {
        const [productId] = await knex('produkti').insert({
            name: name,
            price: price, 
            nutrition: nutrition,
            src: src,
            discount: discount
        });

        const products = await knex('produkti').select('*');

        res.json({ status: "success", products: products, message: "New product recorded successfully" });
    } catch (error) {
        console.error('Error recording purchase:', error);
        sessionStorage.setItem("error", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
