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
  const [ip, setIP] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [cartID, setCartID] = useState(null);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  const API = "http://127.0.0.1:4242/cart"

  const getIP = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    setIP(res.data.ip.toString());
  };

  //just do once 
  useEffect(() => {getIP()}, []);

  console.log(ip);

  const getCartData = async () => {
    const res = await axios.get(API);
    setCartData(res.data);

    for (let cart of cartData) {
      if (cart.ip === ip && cart.completed === false) {
        const cartID = cart.id;
        setCartID(cartID);

        const res = await axios.get(`${API}/${cartID}`);
        setCart(res.data.products);
      }; 
    };  

    if (cart === []) {
      const res = await axios.post(API, {"ip": ip.toString()});
      const newCart = res.data;
      const cartID = newCart.id;
      setCart(newCart);
      setCartID(cartID);
    };
  };

  useEffect(() => {getCartData();}, []);

  console.log(cartData);
  console.log(cartID);
  console.log(cart);

  const onAddtoCart = (newItem) => {
    axios.patch(`${API}/${cartID}/add`, {
      "price": newItem["price"],
      "size": newItem["size"],
      "collar": newItem["collar"],
      "closure": newItem["closure"],
      "pockets": newItem["pockets"],
      "length": newItem["length"],
      "bpocket": newItem["bpocket"],
      "fabric": newItem["fabric"],
      "notes": newItem["notes"]
    })
    .then((result) => {
      axios.get(`${API}/${cartID}`)
      .then((result) => {
        setCart(result.data.products);
      })
      .catch((err) => {
      console.log(err);
      })
      navigate("/cart");
    })
    .catch((err) => {
      console.log(err);
    }) 
  };

  const deleteItem = (id) => {
    axios.patch(`${API}/${cartID}/remove`, {"id":id})
    .then((result) => {
      axios.get(`${API}/${cartID}`)
      .then((result) => {
        setCart(result.data.products);
      })
      .catch((err) => {
      console.log(err);
      })
      navigate("/cart");
    })
    .catch((err) => {
      console.log(err);
    }) 
  };

  const onCheckout = async () => {
    const res = await axios.post('http://127.0.0.1:4242/create-checkout-session', {"products": cart})
    console.log(res);
    // axios.post('http://127.0.0.1:5000/create-checkout-session', {"products": cart})
    // .then((result) => {
    //   axios.patch(`${API}/${cartID}/toggle`)
    //   .then((result) => {
    //     console.log(result)
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
  };
  
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="customizer" element={<Customizer onAddtoCart={onAddtoCart}/>} />
          <Route path="cart" element={<Cart cartData={cart} deleteItem={deleteItem} onCheckout={onCheckout}/>} />
          <Route path="*" element={<NoPage />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Route>
      </Routes>

  );
}

export default App;
