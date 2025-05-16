import React from 'react';
import { useCart } from '../context/CartContext'

function Cart() {
  const { cartItems } = useCart();
  
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
        <ul>
          {cartItems.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - R{item.price} × {item.quantity} 
          </li>
          ))}
          </ul>
          <h3>Total: R{total.toFixed(2)}</h3>
          </>
      )}
    </div>
  );
}

export default Cart;
