import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div>
      <img src={product.image} alt={product.name} style={{ width: "100%" }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>R{product.price}</strong></p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
