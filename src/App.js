import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Customizer from "./pages/Customizer";
import NoPage from "./pages/NoPage";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  let cartID = -1;

  const navigate = useNavigate();

  //add to cart needs to start a checkout session w/ stripe 
  const onAddtoCart = (newItem) => {
    cartID += 1;
    const item = {...newItem, id:cartID}
    const newCartItems = cart.concat(item);
    console.log(newCartItems);
    setCart(newCartItems);
    navigate("/cart");
  };

  //deleteItem for cart 

  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="customizer" element={<Customizer onAddtoCart={onAddtoCart}/>} />
          <Route path="cart" element={<Cart cartData={cart}/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

  );
}

export default App;
