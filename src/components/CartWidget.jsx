import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function CartWidget() {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="badge" style={{ color: 'black' }}>3</span> 
    </div>
  );
}

export default CartWidget;
