import React, { useEffect, useState } from 'react';
import API from '../api';

const Products = () => {
  const [products, setProducts] = useState([]);

  // 🟢 Fetch all products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get('/products');
        setProducts(res.data);
      } catch (err) {
        console.error('❌ Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);

  // 🟢 Add to cart function
  const handleAddToCart = async (product) => {
    try {
      const res = await API.post('/cart/add', {
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.image
      });
      console.log('✅ Added to cart:', res.data);
      alert('Item added to cart successfully!');
    } catch (err) {
      console.error('❌ Error adding to cart:', err.response?.data || err.message);
      alert('Error adding to cart');
    }
  };

  // 🟢 Render products
  return (
    <div style={{ padding: 20 }}>
      <h2>🛒 Products</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ccc', padding: 10, width: 200 }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
