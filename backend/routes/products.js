const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().lean();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

[
  {
    "_id": "64ff1234567890abcdef1234",
    "name": "Sample Product",
    "price": 199,
    "description": "This is a test product",
    "image": "https://via.placeholder.com/150",
    "__v": 0
  }
]

module.exports = router;
