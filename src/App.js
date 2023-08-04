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
  const [cartID, setCartID] = useState(null);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  const API = "https://carryon-backend.onrender.com/cart"

  const getIP = () => {
    axios.get("https://api.ipify.org/?format=json")
    .then((res) => {
      const ip = res.data.ip;

      axios.get(`${API}/ip?ip=${ip}`)
      .then((res) => {
        //cart found
        if (res.data.hasOwnProperty("id")) {
          const id = res.data.id;
          setCartID(id);
          const cart = res.data.products;
          setCart(cart);
          //cart not found
        } else if (res.data.hasOwnProperty("msg")) {
          const ipString = ip.toString()
          axios.post(API, {"ip": ipString})
          .then((res) => {
            const cart = res.data.products;
            setCart(cart);
            setCartID(res.data.id);
          })
          .catch((err) => {
            console.log(err);
          })
        }

      })
      .catch((err) => {
        console.log(err);
      })

    })
    .catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {getIP()}, []);
  console.log(cart);
  console.log(cartID);

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
    const res = await axios.post('https://carryon-backend.onrender.com/create-checkout-session', {"products": cart}, {"headers": {"Access-Control-Allow-Origin": "*"}})
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
