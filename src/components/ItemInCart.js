import outline from '../assets/img/outline.svg';
import bpocketImg from '../assets/img/bpocket/bpocket.svg';
import blank from '../assets/img/blank.svg';

const ItemInCart = ({ id, size, collar, length, closure, pockets, bpocket, price, fabric, notes, deleteItem }) => {
    const bpocketShown = bpocket ? bpocketImg : blank;

    return (
            <div className='row gx-5 py-5'>
                <div className='mx-auto d-grid col-7 col-md-5 position-relative'>
                    <img src={outline} alt='jacket' className='col-12 position-relative'></img>
                    <img src={require(`../assets/img/collar/${collar.toLowerCase()}.svg`)} alt='collar' className="col-12 position-absolute"></img>
                    <img src={require(`../assets/img/closure/${closure.toLowerCase()}.svg`)} alt='closure' className="col-12 position-absolute"></img>
                    <img src={require(`../assets/img/pockets/${pockets.toLowerCase()}.svg`)} alt='pockets' className="col-12 position-absolute"></img>
                    <img src={require(`../assets/img/length/${length.toLowerCase()}.svg`)} alt='length' className="col-12 position-absolute"></img>
                    <img src={bpocketShown} alt='breastpocket'className="col-12 position-absolute"></img>
                </div>
                <div className='col'>
                    <h5>Custom Jacket</h5>
                    <p className="text-muted">${price}</p>
                    <p className="text-muted">Size: {size}</p>
                    <p className="text-muted">Fabric: {fabric}</p>
                    <p className="text-muted">Notes: {notes}</p>
                    <button type="button" className="btn btn-outline-dark" onClick={() => {deleteItem(id)}}>Remove</button>
                </div>
            </div>
    );}

export default ItemInCart;

//'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA='