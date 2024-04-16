import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el ícono del carrito de compras desde la librería React Icons
import 'bootstrap/dist/css/bootstrap.min.css';

function CartWidget() {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="badge" style={{ color: 'black' }}>3</span> {/* Número hardcodeado (fijo) */}
    </div>
  );
}

export default CartWidget;
