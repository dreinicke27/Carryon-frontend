import ItemInCart from "../components/ItemInCart.js";

const Cart = ({ cartData }) => {
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
        //deleteItem={props.deleteItem}
      />
    );
  });

    return (
      <div className="container py-5">
      <h1 className="pb-5">CART</h1>
      {itemComponents}
      <form className="row g-3 py-5">
        <h4>Shipping Information</h4>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4"/>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity"/>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select">
            <option defaultValue>Choose...</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="inputZip"/>
        </div>

        <h4 className='pt-5'>Billing Information</h4>
        <div className="col-md-6">
          <label htmlFor="inputNameCard" className="form-label">Name On Card</label>
          <input type="text" className="form-control" id="inputNameCard"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCardNum" className="form-label">Card Number</label>
          <input type="text" className="form-control" id="inputCardNum"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputExpDate" className="form-label">Expiration Date</label>
          <input type="date" className="form-control" id="inputExpDate"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCVV" className="form-label">CVV</label>
          <input type="text" className="form-control" id="inputCVV"/>
        </div>

        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" htmlFor="gridCheck">
              Different billing address
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-dark">Checkout</button>
        </div>
        </form>
      </div>
      )};
  
  export default Cart;

  