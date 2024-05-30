import React from 'react';

const CartItem = ({ id, title, quantity, price, removeItem }) => {
  return (
    <div className="cart-item">
      <h4>{title}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Precio: ${price}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;