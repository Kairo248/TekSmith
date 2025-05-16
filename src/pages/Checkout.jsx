import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    clearCart();
    navigate('/');
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items before checking out.</p>
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
          <button onClick={handleCheckout}>Confirm and Pay</button>
        </>
      )}
    </div>
  );
}

export default Checkout;
