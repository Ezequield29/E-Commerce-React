import ItemDetail from "./itemDetail"
import '../../src/Styles.css';
const ItemList = ({products}) =>{
    return(
        <div className='ListGroup product-list'>
            {products.map(prod => <ItemDetail key={prod.id} {...prod}/> )}
        </div>
    )
} 
export default ItemList;