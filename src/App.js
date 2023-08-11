import { Routes, Route, useNavigate, useLocation, NavLink } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Customizer from "./pages/Customizer";
import NoPage from "./pages/NoPage";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import About from "./pages/About";
import { useState, useEffect} from "react";
import axios from "axios";
import emailjs from '@emailjs/browser';

const App = () => {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartID, setCartID] = useState(null);
  const [orderComplete, setOrderComplete] = useState(false);

  const navigate = useNavigate();

  const API = "https://carryon-backend.onrender.com/cart"

  const location = useLocation();

  const cartSetup = async () => {
    axios.get("https://api.ipify.org/?format=json")
    .then((res) => {
      const ip = res.data.ip;
      console.log(ip);
      axios.get(`${API}/ip?ip=${ip}`)
      .then((res) => {
        //cart found
        if (res.data.hasOwnProperty("id")) {
          const id = res.data.id;
          setCart(res.data);
          setCartID(id);
          //if cart not completed
          if (res.data.completed === false) {
            const products = res.data.products;
            setProducts(products);
          } else if (res.data.completed === true) { // if cart completed, create a new one
            const ipString = ip.toString()
            axios.post(API, {"ip": ipString})
            .then((res) => {
              const cart = res.data;
              setCart(cart);
              const id = res.data.id;
              setCartID(id);
              const products = res.data.products;
              setProducts(products);
          })
          .catch((err) => {
            console.log(err);
          })
          };

          //cart not found
        } else if (res.data.hasOwnProperty("msg")) {
          const ipString = ip.toString()
          axios.post(API, {"ip": ipString})
          .then((res) => {
            const cart = res.data;
            setCart(cart);
            const id = res.data.id;
            setCartID(id);
            const products = res.data.products;
            setProducts(products);
          })
          .catch((err) => {
            console.log(err);
          })
        };

      })
      .catch((err) => {
        console.log(err);
      })

    })
    .catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {cartSetup()}, []);
  console.log(cart);
  console.log(products);
  console.log(cartID);
  console.log(orderComplete);

  const templateParams = {
    id: cartID
  };

  const sendOrder = () => {
    emailjs.send(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE_ORDER, templateParams, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });
  };

  const getPage = () => {
    if (location.pathname.includes("success")) {
      setOrderComplete(true);
      if (cartID !== null) {
        toggleComplete();
        sendOrder();
      };
    };
  };

  const toggleComplete = async () => {
    const res = await axios.patch(`${API}/${cartID}/toggle`);
    console.log(res.data);
  };


  useEffect(() => {getPage()}, [cartSetup]);


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
        setProducts(result.data.products);
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
        setProducts(result.data.products);
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
    const res = await axios.post('https://carryon-backend.onrender.com/create-checkout-session', {"products": products}, {"headers": {"Access-Control-Allow-Origin": "*"}})
    console.log(res);
    const url = res.data;
    window.open(url, "_self");
  };


  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="customizer" element={<Customizer onAddtoCart={onAddtoCart}/>} />
          <Route path="cart" element={<Cart cartData={products} deleteItem={deleteItem} onCheckout={onCheckout}/>} />
          <Route path="about" element={<About />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

  );
};

export default App;
