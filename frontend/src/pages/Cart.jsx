import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]); // ✅ Initialize as empty array

  useEffect(() => {
    fetch('http://localhost:4000/api/cart') // Your backend endpoint
      .then(res => res.json())
      .then(data => setCartItems(data)) // Make sure 'data' is an array
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item._id}>{item.name}</div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
