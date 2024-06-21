import Item from "./Item"
import '../../src/Styles.css';
const ItemList = ({items}) =>{
    return(
        <>
            {items.map(produ =>( 
            <Item key={produ.id} item={produ}/>
            ) )}
        </>
    )
} 
export default ItemList;