import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa'; 

import {useContext} from 'react';
import {CartContext} from '../components/CartContext'
import { Link } from 'react-router-dom';

  const CartWidget = () => {
    const { getCountProducts } = useContext(CartContext);
    const count = getCountProducts();
  
    return (
      <Link to='/cart' className='CartWidget' style={{ display: count > 0 ? 'block' : 'none' }}>
        <FaShoppingCart />
        {count > 0 && <span className="cart-count">{count}</span>}
      </Link>
    );
  }
export default CartWidget;
