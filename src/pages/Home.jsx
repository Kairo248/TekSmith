import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../data/product';
import './styles/Home.css';

function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="home-container">
      <Navbar />

      <section className="hero">
        <img
          src="https://www.apple.com/v/home/bf/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_largetall_2x.jpg" 
          alt="Featured Product"
          className="hero-img"
        />
        <div className="hero-text">
          <h1>Experience Cutting-Edge Tech</h1>
          <p>Explore the future with our latest gadgets</p>
        </div>
      </section>

      <section className="product-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">Price: R{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
