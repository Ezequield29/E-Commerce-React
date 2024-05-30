import { NavLink, Link } from 'react-router-dom';
import '../../src/Styles.css';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
const ItemDetail = ({id, title, thumbnail, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity)=>{
        setQuantityAdded(quantity)
        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture>
                <img src={thumbnail} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    precio: $ {price}
                </p>
                <p className="Info">
                    stock Disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ?(
                        <Link to='/cart' className="Option">Terminar Compra</Link>
                    ) : (
                        <itemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            
            </footer>
        </article>
    )
}
export default ItemDetail