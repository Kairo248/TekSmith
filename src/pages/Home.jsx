import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Home.css'; // Add styling here

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">TechSmith</div>
        <ul className="nav-links">
          <li onClick={() => navigate('/products?category=Phones')}>Phones</li>
          <li onClick={() => navigate('/products?category=Laptops')}>Laptops</li>
          <li onClick={() => navigate('/products?category=Accessories')}>Accessories</li>
          <li onClick={() => navigate('/products?category=Gaming')}>Gaming</li>
        </ul>
        <button className="login-btn" onClick={handleLogin}>Login</button>
      </nav>

      {/* HERO SECTION */}
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
    </div>
  );
};

export default Home;
