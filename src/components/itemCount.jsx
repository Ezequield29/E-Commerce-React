import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd}) => {
  const [quantity, setQuantity] = useState(1);
const [itemStock, setItemStock]  = useState(stock)
const [visible, setVisible] =useState(true)

  const increment = () => {
    if (quantity < itemStock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const addToCart=()=>{
    if(quantity <= itemStock){
      setItemStock(itemStock-quantity)
      onAdd(quantity)
      setQuantity(1);
      setVisible(false)
    }
  }
  useEffect(()=>{
    setItemStock(stock);
  },[stock])

    return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="btn-group" role="group">
            <button type="button" className="btn bg-black text-white rounded-0" onClick={decrement}>-</button>
            <button type="button" className="btn bg-black text-white rounded-0">{quantity}</button>
            <button type="button" className="btn bg-black text-white rounded-0" onClick={increment}>+</button>
          </div>
        </div>
      </div>
      <div className="row my-1">
        <div className="col">
        {visible ? <button type="Button" className= "btn bg-black text-white text uppercase rounded-0" onClick={addToCart}> Agregar al carrito </button> :
        <Link to={"/Cart"} className= "btn bg-black text-white text uppercase rounded-0"> Finalizar Compra </Link>}
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
