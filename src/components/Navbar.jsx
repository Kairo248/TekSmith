import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';


function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>TechSmith</div>
      <ul className="nav-links">
        <li onClick={() => navigate('/products')}>All</li>
        <li onClick={() => navigate('/products?category=Phones')}>Phones</li>
        <li onClick={() => navigate('/products?category=Laptops')}>Laptops</li>
        <li onClick={() => navigate('/products?category=Desktop')}>Desktop</li>
        <li onClick={() => navigate('/products?category=Cameras')}>Cameras</li>
        <li onClick={() => navigate('/products?category=Accessories')}>Accessories</li>
        <li onClick={() => navigate('/products?category=Gaming')}>Gaming</li>
      </ul>
      <div className="cart-icon" onClick={() => navigate('/cart')}>
        <FaShoppingCart size={24} title="Cart" />
      </div>
       <button className="logout-btn" onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;
