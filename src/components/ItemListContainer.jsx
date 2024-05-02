import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../components/asyncMock";
import ItemList from "./itemList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting })=>{
  const [products, setProducts] = useState([])
  const {categoryId}= useParams()

  useEffect(() =>{
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

      asyncFunc(categoryId)
      .then(response => {
          setProducts(response)
      })
      .catch(error =>{
          console.error(error)
      })
  },[categoryId])
  return (
    <div className="container">
      <h2>{greeting}</h2>
      <p>Bienvenido a nuestra tienda de productos de computación.</p>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer;
