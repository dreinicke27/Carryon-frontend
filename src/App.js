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
  //store ip address
  const [ip, setIP] = useState([]);

  const getIP = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    setIP(res.data.ip);
  };

  //just do once 
  useEffect(() => {
    getIP()
  }, []);

  console.log(ip);

  const [cartData, setCartData] = useState([]);
  const [cartID, setCartID] = useState(null);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  const API = "https://carryon-backend.onrender.com/cart"

  //get all carts so that I can filter to find the right one
  const getCartData = () => {
    axios
      .get(API)
      .then((result) => {
        //console.log(result.data);
        setCartData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  //useEffect to do just once 
  useEffect(() => {getCartData();}, []);

  //find existing cart, or create a new one 
  const findOrCreateCart = () => {
    for (let cart of cartData) {
      if (cart.ip === ip && cart.completed === false) {
        const cartID = cart.id;
        setCartID(cartID);
        
        axios.get(`${API}/${cartID}`)
        .then((result) => {
          console.log(result.data);
          setCart(result.data.products);
        })
        .catch((err) => {
          console.log(err);
        })
      }; 
    };
    if (cart === []) {
      axios.post(API, {"ip": ip.toString()})
      .then((result) => {
        const newCart = result.data;
        const cartID = newCart.id;
        setCart(newCart);
        setCartID(cartID);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  };

  //useEffect to do just once 
  useEffect(() => {findOrCreateCart();}, []);
 
  console.log(cartID);

  //`${API}/${}`
  //add api call to update existing cart to /cart/id put
  const onAddtoCart = (newItem) => {
    //console.log(newItem);
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
      console.log(result);
      axios.get(`${API}/${cartID}`)
      .then((result) => {
        console.log(result.data);
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
      console.log(result);
      axios.get(`${API}/${cartID}`)
      .then((result) => {
        console.log(result.data);
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

  const onCheckout = (cart) => {
    axios.post('https://carryon-backend.onrender.com/create-checkout-session', {
        "products": cart.products
    })
    .then((result) => {
      console.log(result);
      axios.patch(`${API}/${cartID}/toggle`)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err);
    })

  }
  
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
