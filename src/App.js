import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Customizer from "./pages/Customizer";
import NoPage from "./pages/NoPage";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  //const navigate = useNavigate();

  //add to cart needs to start a checkout session w/ stripe 
  const onAddtoCart = (newItem) => {
    let cartID = -1;
    if (cart.length === 0) {
       cartID = 0;
    } else {
      cartID = Math.max(...cart.map(item => item.id));
      cartID += 1;
    }
    const item = {...newItem, id:cartID}
    const newCartItems = cart.concat(item);
    console.log(newCartItems);
    setCart(newCartItems);
    return cartID;
    //navigate("/cart");
  };

  //deleteItem for cart 
  const deleteItem = (id) => {
    const newItems = [];
        for (let item of cart) {
          if (item.id !== id) {
            newItems.push(item);
          }
        }
        setCart(newItems);
  };

  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="customizer" element={<Customizer onAddtoCart={onAddtoCart}/>} />
          <Route path="cart" element={<Cart cartData={cart} deleteItem={deleteItem}/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

  );
}

export default App;
