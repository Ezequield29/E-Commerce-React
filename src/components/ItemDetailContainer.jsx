import { useState,useEffect } from "react";;
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore"
import Loading from "./Loading";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({}); //este se cambio en usestate([])
    const {id} = useParams()
    const [loading, setLoading] = useState(true);

useEffect(()=>{
    console.log(id)
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItem({id: snapShot.id, ...snapShot.data()});
                setLoading(false);
        }
    })
}, [id]);


    return(
        <div className="container">
            <div className="row my-5">
                {loading ? <Loading/> : <ItemDetail item={item} />}
            </div>
        </div>
    )
}
    export default ItemDetailContainer;
