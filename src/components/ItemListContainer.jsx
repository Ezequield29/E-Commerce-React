import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function ItemListContainer({ greeting }) {
  return (
    <div className="container">
      <h2>{greeting}</h2>
      <p>Bienvenido a nuestra tienda de productos de computación.</p>
    </div>
  );
}

export default ItemListContainer;
