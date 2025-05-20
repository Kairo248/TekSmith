import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './styles/Checkout.css'; 

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
    <div className="checkout-container">
      <div className="checkout-card">
        <h1 className="checkout-title">Checkout</h1>
        {cartItems.length === 0 ? (
          <p className="empty-msg">Your cart is empty. Please add items before checking out.</p>
        ) : (
          <>
            <ul className="checkout-list">
              {cartItems.map((item, index) => (
                <li key={index}>
                  <strong>{item.name}</strong> - R{item.price} × {item.quantity}
                </li>
              ))}
            </ul>
            <h3 className="checkout-total">Total: R{total.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>Confirm and Pay</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
