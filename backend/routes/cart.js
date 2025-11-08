const express = require('express');
const router = express.Router();

// Temporary in-memory cart (you can later use MongoDB)
let cart = [];

// 🟢 Add item to cart
router.post('/add', (req, res) => {
  const { productId, name, price, image } = req.body;
  if (!productId || !name || !price) {
    return res.status(400).json({ message: 'Missing product details' });
  }

  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ productId, name, price, image, quantity: 1 });
  }

  res.json({ message: 'Item added to cart', cart });
});

// 🟢 Get all cart items
router.get('/', (req, res) => {
  res.json(cart);
});

// 🟢 Remove item from cart
router.post('/remove', (req, res) => {
  const { productId } = req.body;
  cart = cart.filter(item => item.productId !== productId);
  res.json({ message: 'Item removed from cart', cart });
});

module.exports = router;
