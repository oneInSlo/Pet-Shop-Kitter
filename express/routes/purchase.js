const express = require('express');
const router = express.Router();
const knexConfig = require('../knexfile.js'); // Import Knex configuration
const knex = require('knex')(knexConfig.development); // Initialize Knex with the development configuration

router.get('/', function(req, res, next) {
    res.send("dela");
});

router.post('/', async (req, res) => {
    const { userId, products, totalAmount, dateOfPurchase } = req.body;

    try {
        // Save purchase data to the database
        const [purchaseId] = await knex('nakup').insert({
            idUser: userId,
            products: products, 
            totalAmount: totalAmount,
            dateOfPurchase: dateOfPurchase
        });

        res.json({ status: "success", purchaseId: purchaseId, message: "Purchase recorded successfully" });
    } catch (error) {
        console.error('Error recording purchase:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
