const mongoose = require('mongoose');
const Product = require('./models/Product'); // adjust path if needed

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_app_db')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));

const sampleProducts = [
  {
    name: "iPhone 15 Pro",
    price: 120000,
    description: "Apple iPhone 15 Pro with A17 Pro chip",
    image: "https://example.com/iphone15pro.jpg"
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    price: 95000,
    description: "Samsung Galaxy S24 Ultra with 200MP camera",
    image: "https://example.com/s24ultra.jpg"
  },
  {
    name: "OnePlus 12",
    price: 65000,
    description: "OnePlus 12 with Snapdragon 8 Gen 3",
    image: "https://example.com/oneplus12.jpg"
  }
];

async function seed() {
  await Product.deleteMany();
  await Product.insertMany(sampleProducts);
  console.log('✅ Products Added!');
  mongoose.connection.close();
}

seed();
