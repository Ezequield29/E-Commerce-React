import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/images/trash2.svg"
const Cart = () =>{
    const { cart, removeItem, clearCart, getCountProducts, getSumProducts} = useContext(CartContext)
    if (getCountProducts()==0){
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-primary " role="alert">
                        <h1>No hay items en el carrito</h1>
                        <Link to='/' className= 'btn text-white bg-dark rounded-0 my-5'> Volver a la Pagina Principal</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                <table className="table">
                    <tbody>
                    <tr>
                            <td colSpan={4} className="text-end"><button className="btn text-white bg-dark 
                            rounded-0" onClick={clearCart}>Vaciar Carrito</button></td>
                        </tr>
                        {cart.map(item=>(
                            <tr key={item.id}>
                                <td> <img src={item.thumbnail} alt={item.title} width={120} /></td>
                                <td className="align-middle text-start"> {item.title} </td>
                                <td className="align-middle text-center"> ${item.price} </td>
                                <td className="align-middle text-center"> {item.quantity} </td>
                                <td className="align-middle text-center"> {item.quantity * item.price} </td>
                                <td className="align-middle text-end"> <img src={trash} width={24} alt="Eliminar Producto" 
                                title="Eliminar Producto" onClick={() => {removeItem(item.id)}}/> </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={4} className="text-center"><b>Total</b></td>
                            <td className="text-center"><b>${getSumProducts()}</b></td>
                            <td className="text-end"><Link to={'/checkout'} className="btn text-white bg-dark 
                            rounded-0">Checkout</Link></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}
export default Cart;
