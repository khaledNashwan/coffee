import React, { useState } from "react";
import { Products } from "../../data";
import "./product.css";
import Rating from "../Rating/Rating";
import Model from "./Model";


const Proudct = () => {
  const [openModal, setOpenModal] = useState(false);
  const [proudctData, setProudctData] = useState(null);
  const [search, setsearch] = useState("");

  const handelModel = (proudct) => {
    setOpenModal(true);
    setProudctData(proudct);
  };
  return (
    <section className="contianer Proudct">
      <div className="search_box">
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          type="search"
          placeholder="search"
        />
        <button className="search-box-btn">search</button>
      </div>
      <div className=" Proudct_contianer">
        {Products.filter((a) =>
          a.title.toLocaleLowerCase().includes(search)
        ).map((item) => (
          <div key={item.id} className="card">
            <div className="image_container">
              <img
                onClick={() => handelModel(item)}
                src={item.images}
                alt={item.title}
              />
            </div>
            <h3 className="title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <p className="price">${item.price} </p>
            <button
              onClick={() => handelModel(item)}
              className="btn_pro"
              type="submit"
            >
              more information
            </button>
          </div>
        ))}
      </div>
      {openModal && (
        <Model proudctData={proudctData} setOpenModal={setOpenModal} />
      )}
    </section>
  );
};

export default Proudct;
