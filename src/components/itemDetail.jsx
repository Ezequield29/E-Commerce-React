import '../../src/Styles.css';
import ItemCount from './itemCount';
import { useContext} from 'react';
import { CartContext } from './CartContext';
const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext)
    const onAdd = (quantity) =>{
        addItem(item, quantity)
    console.log("Agregaste: " + quantity+ "productos!")
    }
    console.log("Item:", item);
    if (!item.id) {
        return <p>Cargando...</p>;
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 offset-md-2'>
                    <img src={item.thumbnail} className='img-fluid' alt={item.title} />
                </div>
                <div className='col-md-4'>
                    <h1 className='fs-3 text-uppercase fw-semibold'>{item.title}</h1>
                    <p className='fs-4 fw-bold'>${item.price}</p>
                    <p className='small'>{item.description} </p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
} 
export default ItemDetail