import jacket from '../assets/jacket.svg';

const ItemInCart = () => {
    return (
            <div className='row gx-5 py-5'>
                <div className='col-auto'>
                    <img src={jacket} alt='jacket'/>
                </div>
                <div className='col'>
                    <h5>Custom Jacket</h5>
                    <p className="text-muted">$XXX</p>
                    <button type="button" className="btn btn-outline-dark">Remove</button>
                </div>
            </div>
    );}

export default ItemInCart;