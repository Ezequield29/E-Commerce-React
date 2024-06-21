import { Link } from "react-router-dom";
const Item = ({item}) =>{
    return(
        <div className="col-md-3 text-center">
            <Link to={"/item/" + item.id} className="tex-decoration-none">
                <div className="vard border-0">
                    <img src={item.thumbnail} className="img-fluid" alt={item.title} />
                    <div className="card-body">
                        <p className="card-tex small text-uppercase">{item.title} <br/> <span className="card-text 
                        fs-5"><b>${item.price}</b></span></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Item;