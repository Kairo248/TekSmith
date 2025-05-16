import React from 'react';
import { useLocation } from 'react-router-dom';
import products from '../data/product';
import ProductCard from '../components/ProductCard';

function Products() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

  const filterProucts = category
    ? products.filter(product => product.category === category)
    : products;

  return (
    <div>
      <h1>{category ? category : 'All'}Products</h1>
      <div>
        {filterProucts.length > 0 ? (
          filterProucts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
      </div>
    </div>
  );
};

export default Products;
