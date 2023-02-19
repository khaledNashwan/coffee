import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./contact.css";
import phote_contact from "../../image/contact.svg";
import { IoLocationSharp } from "react-icons/io5";
import {
  BsWhatsapp,
  BsTwitter,
  BsFacebook,
  BsTelephonePlus,
} from "react-icons/bs";
import { MdEmail } from 'react-icons/md';
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="contianer contact-container">
          <aside class="contact-aside">
            <div className="aside-image">
              <img src={phote_contact} alt="" />
            </div>
            <h2>contact us </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              iusto animi, velit adipisicing elit. Optio iusto animi, velit{" "}
            </p>
            <ul className="contact-detail">
              <li>
                <BsTelephonePlus />
                <h5>+24567899007</h5>
              </li>
              <li>
                <MdEmail />
                <h5>support@email.com</h5>
              </li>
              <li>
                <IoLocationSharp />
                <h5>GAZA Palestine</h5>
              </li>
            </ul>

            <ul className="contact-socials">
              <li>
                <a href="#">
                  <BsFacebook />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.linkedin.com/" target="_blank">
                  <BsWhatsapp />{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://www.instagram.com/" target="_blank">
                  {" "}
                  <FaInstagram />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://twitter.com/" target="_blank">
                  <BsTwitter />
                </a>{" "}
              </li>
            </ul>
          </aside>
          <form className="contact-form">
            <div className="form-name">
              <input
                className="input"
                type="text"
                name="First Name"
                placeholder="First Name"
                required
              />
              <input
                className="input"
                type="text"
                name="Last Name"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              className="input"
              type="email"
              name="Email Address"
              placeholder=" your Email Address"
              required
            />
            <textarea
              name="Massage"
              placeholder="Massage"
              rows="7"
              required
            ></textarea>
            <button className="btn_header" type="submit">
              send Massage{" "}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
