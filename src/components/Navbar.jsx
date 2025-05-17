import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';


function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>TechSmith</div>
      <ul className="nav-links">
        <li onClick={() => navigate('/products')}>All</li>
        <li onClick={() => navigate('/products?category=Phones')}>Phones</li>
        <li onClick={() => navigate('/products?category=Laptops')}>Laptops</li>
        <li onClick={() => navigate('/products?category=Accessories')}>Accessories</li>
        <li onClick={() => navigate('/products?category=Gaming')}>Gaming</li>
      </ul>
      <div className="cart-icon" onClick={() => navigate('/cart')}>
        <FaShoppingCart size={24} title="Cart" />
      </div>
    </nav>
  );
}

export default Navbar;
