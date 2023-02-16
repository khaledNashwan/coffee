import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './page/Home/Home.jsx'
import Menu from "./page/Menu/Menu.jsx";
import Cart from "./page/Cart/Cart.jsx";
import Contact from "./page/Contact/Contact.jsx";
import './index.css'
import About from "./page/About/About.jsx";
import Login from "./page/Login/Login.jsx";
import Register from "./page/Register/Register.jsx";
import Notfound from "./page/NotFound/Notfound.jsx";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );      

}

export default App;
