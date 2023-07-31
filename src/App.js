import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Customizer from "./pages/Customizer";
import NoPage from "./pages/NoPage";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  //store cookie
  const [ip, setIP] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIP(res.data.ip);
  };

  //just do once 
  useEffect(() => {
    getData()
  }, []);

  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  //add api call with ip as id 
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
    setCart(newCartItems);
    navigate("/cart");
  };


  //deleteItem for cart 
  //add api call with cookie as id 
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
          <Route path="cart" element={<Cart cartData={cart} ip={ip} deleteItem={deleteItem}/>} />
          <Route path="*" element={<NoPage />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Route>
      </Routes>

  );
}

export default App;
