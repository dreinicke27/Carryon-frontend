import ItemInCart from "../components/ItemInCart.js";

const Cart = ({ cartData, deleteItem, onCheckout }) => {
  const itemComponents = cartData.map((item) => {
    return (
      <ItemInCart
        key={item.id}
        id={item.id}
        size={item.size}
        collar={item.collar}
        length={item.length}
        closure={item.closure}
        pockets={item.pockets}
        bpocket={item.bpocket}
        price={item.price}
        fabric={item.fabric}
        notes={item.notes}
        deleteItem={deleteItem}
      />
    );
  });

    let subtotal = 0;
    cartData.forEach(element => {
      subtotal += element.price;
    });

    return (
      <div className="container py-5">
      <h1 className="pb-5">CART</h1>
      {itemComponents}

      <div className="row">
        <div className="col-10 py-5">
          <h5 className="float-end text-muted">Sub-total: ${subtotal}.00</h5>
        </div>
      </div>
      
      <div className="row">
        <div className="col-10">
            <button className="btn btn-dark float-end" onClick={onCheckout}>Checkout</button>
        </div>
        </div>
      </div>
      )};
  
  export default Cart;