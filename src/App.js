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

  const API = "http://127.0.0.1:5000/cart"

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
    // let cartID = -1;
    // if (cart.length === 0) {
    //    cartID = 0;
    // } else {
    //   cartID = Math.max(...cart.map(item => item.id));
    //   cartID += 1;
    // }
    // const item = {...newItem, id:cartID}

    //find product backend id (1 or 2) based on price
    let prod_id;
    if (newItem.price === 165) {
      prod_id = 1;
    } else {
      prod_id = 2;
    }
    const id = cartID;

    axios.patch(`${API}/${id}/add`, {"product":{"id": {prod_id}}})
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    })

    axios.get(`${API}/${cartID}`)
    .then((result) => {
      console.log(result.data);
      setCart(result.data.products);
    })
    .catch((err) => {
      console.log(err);
    })
    // const newCartItems = cart.concat(newItem);
    // setCart(newCartItems);
    navigate("/cart");
  };


  //add api call to /cart/id delete 
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
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Route>
      </Routes>

  );
}

export default App;
