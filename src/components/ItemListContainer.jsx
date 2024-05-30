import React, { useState, useEffect } from "react";

import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "./services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting })=>{
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoryId}= useParams()

  useEffect(() =>{
    setLoading(true)
    const collectionRef = categoryId
    ? query(collection(db, "products"), where("category", "==", categoryId))
    : collection(db, "products")
    getDocs(collectionRef)
    .then((response) =>{
      const productsAdapted = response.docs.map(doc => {
        const data = doc.data()
        return{id: doc.id, ...data}
        })
        setProducts(productsAdapted)
      })
        .catch(error => {
          console.log(error)
        })
        .finally(()=>{
          setLoading(false)
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
