import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa'; 

import {useContext} from 'react';
import {CartContext} from '../components/CartContext'
import { Link } from 'react-router-dom';



const CartWidget = () => {
  const {getCountProducts}= useContext(CartContext)
 
  return (
    <Link to='/cart' className='CartWidget' style ={{display: getCountProducts > 0 ? 'block' : 'none'}}>
      <FaShoppingCart />
      {getCountProducts()}
    </Link>
  );
}
export default CartWidget;
