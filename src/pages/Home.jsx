import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../data/product';
import { useCart } from '../context/CartContext';
import './styles/Home.css';

function Home() {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <div className="home-container">
      <Navbar />

      <section className="hero">
        <img
          src="/images/feature-image.webp" 
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


        {loading ? (
          <div className="product-loader">
            <div className="loader"></div>
            <p>Loading products...</p>
          </div>
        ) : (
        <div className="product-grid">
          {products.filter(p => p.featured).map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">Price: {product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default Home;
