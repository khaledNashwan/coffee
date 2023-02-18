import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import hero_img from "../../image/WhatsApp Image 2022-12-18 at 14.58.10.jpg";
import CartContext from "../../context/cartContext";

import "./Navbar.css";
import Darkmode from "../Them/Darkmode";

const Navbar = () => {
  const { cartItemLength } = useContext(CartContext);

  return (
    <nav className="nav">
      <div className="contianer">
        <div className="Nav_contianer">
          <Link to="/Home" className="logo">
            <img src={hero_img} alt="" />
            <span>Ristretto Coffee Lab</span>
          </Link>

          <div className="menu">
            <ul className="navbar-links">
              <Link className="black" to="/Home">
                Home
              </Link>
              <Link className="black" to="/Menu">
                Menu
              </Link>
              <Link className="black" to="/About">
                About
              </Link>
            </ul>
          </div>

          <div className="icone2">
            <div className="icone">
              <Link to="/Contact">
                <BsFillTelephoneOutboundFill />
              </Link>
              <Link className="cart_i" to="/Cart">
                {cartItemLength > 0 && (
                  <b className="cart-notfication"> {cartItemLength}</b>
                )}
                <AiOutlineShoppingCart />
              </Link>

              <Link to="/">
                <BiLogInCircle />
              </Link>
              <div>
                <Link to="/Register">
                  <AiOutlineUserAdd />
                </Link>
              </div>
              <div>
                <Darkmode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
