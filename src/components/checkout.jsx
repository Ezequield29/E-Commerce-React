import { useContext, useState } from "react";
import CartContext from "./CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = ()=>{
    const {cart,clearCart, getCountProducts, getSumProducts} = useContext(CartContext)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("");

       const generarOrden = () => {
        if (name == ""){
            return false;
        }
        if (email == ""){
            return false;
        }
        if (phone == ""){
            return false;
        }
            const buyer = {name:name, email:email, phone:phone}
            const items = cart.map (item => ({id:item.id, title:item.title, price:item.price}))
            const date = new Date();
            const currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} 
            ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            const order = {buyer:buyer, items:items, date:currentDate, total:getSumProducts()}
            /* console.log(order) */
            //Agrego un nuevo Documento a la coleccion Orders
            const db = getFirestore()
            const ordersCollection = collection(db, "orders")
            addDoc(ordersCollection, order).then(data =>{
                setOrderId(data.id);
                setName("");
                setEmail("");
                setPhone("");
                clearCart();
            });
        }
    if(getCountProducts()==0 && !orderId){
        return(
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h3>No se encontraron productos en el Carrito!</h3>
                        <Link to={"/"} className="btn text-white bg-dark rounded-0 my-5" >Volver a la Pagina 
                        Principal</Link>
                    </div>
                </div>
            </div>
        )
    }
return(
    <div className="container my-5">
       {!orderId ?
        <div className="row">
            <div className="col">
                <form >
                    <div className="mb-3">
                        <label className="form-label">Nombre:</label>
                        <input type="text" className="form-control" onInput={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div>
                    <label className="form-label">Email:</label>
                        <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div>
                    <label className="form-label">Telefono:</label>
                        <input type="text" className="form-control" onInput={(e) => {setPhone(e.target.value)}}/>
                    </div>
                    <button type="button" className="btn text-white bg-black" onClick={generarOrden}> Generar Orden</button>
                </form>
            </div>
            <div className="col">
                <table className="table">
                    <tbody>
                        {cart.map(item=>(
                            <tr key={item.id}>
                                <td> <img src={item.thumbnail} alt={item.title} width={80} /></td>
                                <td> {item.title} </td>
                                <td>X{item.quantity} </td>
                                <td className="text-end"> ${item.price} </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3}><b>Total</b></td>
                            <td className="text-end"><b>${getSumProducts()}</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        : ""}
        <div className="row">
            <div className="col">
                {orderId ?<div className="alert alert-light" role="alert"> "Felicitaciones! Tu ID de Compra es: <b> {orderId }</b></div>: ""}
            </div>
        </div>
    </div>
)
}
export default Checkout