import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Payment.css";
import { useCart } from "../context/CartContext";

export default function Payment() {
  const location = useLocation();
  const { name, email, address, clearCart } = location.state || {};
  const { cartItems, totalPrice } = useCart();
  return (
    <div className="payment">
      <div className="cont">
        <div className="sec">
          <h3>Delivery Information</h3>
          <div className="user-inf">
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Address:</strong> {address}
            </p>
          </div>
        </div>
        <div className="sec">
          <h3>Review Items</h3>
          <div className="orderSummary">
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} × {item.quantity} - $
                  {(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sec">
          <h3>Payment </h3>
          <div className="order">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
