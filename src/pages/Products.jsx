import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../data/product';
import ProductCard from '../components/ProductCard';
import './styles/Products.css';

function Products() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCart = (product) => {
    setSelectedItems([...selectedItems, product]);
  };

  const goToCart = () => {
    navigate('/cart', { state: { cartItems: selectedItems } });
  };

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="products-page">
      <Navbar />
      <div className="animated-bg"></div>

      <h1 className="products-title">{category ? category : 'All'} Products</h1>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>

      <div className="cart-btn-wrapper">
        <button className="cart-btn" onClick={goToCart}>
          Go to Cart ({selectedItems.length})
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
