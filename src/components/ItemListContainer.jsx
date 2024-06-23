import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId} = useParams();

useEffect(()=>{

  const db = getFirestore();

  const itemsCollection = collection(db, "items");
  const queryCollection= categoryId ? query(itemsCollection,where("category", "==", categoryId)) : itemsCollection;

  getDocs (queryCollection)
    .then(snapShot =>{
      if (snapShot.size > 0){
        setItems(snapShot.docs.map(item => ({ id: item.id, ...item.data() })));
    } else {
      setItems ([]);
    }
    setLoading(false);
  })
  .catch(error => {
    console.error("Error al cargar los productos:", error);
    setLoading(false);
  });
},[categoryId]);

  return (
    <div className="container">
      <div className="row my-5">
      <h2>{greeting}</h2>
      <p>Bienvenido a nuestra tienda de productos de computación.</p>
      {loading ? <Loading/> : <ItemList items={items} />}
      </div>
    </div>
  );
};

export default ItemListContainer; 