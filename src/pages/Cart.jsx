import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './styles/Cart.css';

function Cart() {
  const { cartItems, removeFromCart } = useCart(); 
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.toString().replace(/,/g, ''));
    return acc + numericPrice * item.quantity;
  }, 0);

  return (
    <div className="cart-page">
      <div className="animated-bg"></div>

      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-msg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li className="cart-item" key={index}>
                <div>
                  <strong>{item.name}</strong>
                 <p>R{parseFloat(item.price.toString().replace(/,/g, '')).toLocaleString(undefined, { minimumFractionDigits: 2 })} × {item.quantity}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h3>Total: <span>R{total.toLocaleString(undefined, { minimumFractionDigits : 2})}</span></h3>
            <button className="checkout-btn" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
