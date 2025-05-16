import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import products from '../data/product';
import ProductCard from '../components/ProductCard';

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

  const filterProucts = category
    ? products.filter(product => product.category === category)
    : products;

  return (
    <div>
      <h1>{category ? category : 'All'}Products</h1>
      <div>
        {filterProucts.length > 0 ? (
          filterProucts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
      </div>

        <div>
          <button onClick={goToCart}>Go to Cart ({selectedItems.length})</button>
        </div>
    </div>
  );
};

export default Products;
