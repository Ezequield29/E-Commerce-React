import { NavLink, Link } from 'react-router-dom';
import '../../src/Styles.css';
const ItemDetail = ({id, title, thumbnail, price, stock}) => {
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
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )
}
export default ItemDetail