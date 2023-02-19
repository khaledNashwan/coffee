import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
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
            <h3>Ristretto Coffee </h3>
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
          <div className="ie">
            
            <div>
              <Link to="/Contact">
                <BsFillTelephoneOutboundFill />
              </Link>
            </div>

            <div>
              <Link className="cart_i" to="/Cart">
                {cartItemLength > 0 && (
                  <b className="cart-notfication"> {cartItemLength}</b>
                )}
                <AiOutlineShoppingCart />
              </Link>
            </div>

            <div>
              <Link to="/">
                <BiLogInCircle />
              </Link>
            </div>

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
    </nav>
  );
};

export default Navbar;
