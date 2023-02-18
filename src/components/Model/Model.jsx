import React, { useContext, useState } from "react";
import "./model.css";
import { AiOutlineClose } from "react-icons/ai";
import Rating from "../Rating/Rating";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../../context/cartContext";

const Model = ({ proudctData, setOpenModal }) => {
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  return (
    <div className="model_contianer">
      <div className="model_content">
        <div className="icone">
          <AiOutlineClose onClick={() => setOpenModal(false)} />
        </div>
        <div className="model_wrapper">
          <img src={proudctData.images} alt="" />
          <div className="model_text">
            <h3 className="title">{proudctData.title}</h3>
            <p className="price">$ {proudctData.price}</p>
            <Rating rating={proudctData.rating} reviews={proudctData.reviews} />
            <div className="AddtoCart">
              <input
                type="number"
                min="1"
                max="100"
                className="AddtoCart_input"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <button
                onClick={() => addToCart({ ...proudctData, quantity: qty })}
                className="btn_pro"
                type="submit"
              >
                {" "}
                <span>
                  <AiOutlineShoppingCart />
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
