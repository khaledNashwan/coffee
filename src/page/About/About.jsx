import React from "react";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Map/Map";
import Navbar from "../../components/Navbar/Navbar";
import "./about.css";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="About">
        <div className="contianer About_contianer ">
          <div className="text_zero">
            <p>
              Your place for the best Italian coffee in Gaza, for work, for
              pleasure and for a session...
            </p>
            <p>
              We have customized every corner in Ristretto Café - Branch Two
            </p>
            <p> to suit your taste and your special luster</p>
          </div>
          <div className="mapp">
            <Map />
          </div>
          <div className="text_one">
            <p>
              🏪 The first main branch: Gaza - the thirtieth - the intersection
            </p>
            <p>
              {" "}
              of the Islamic University in the north, behind Dar Al-Arqam
              Library
            </p>
            <p>- Lego Center Building - Roof Floor</p>
            <p>📍0566140666</p>
          </div>

          <div className="text_two">
            <p>🏪 Gaza - Thirtieth - opposite Al-Azhar University Sciences -</p>
            <p>Vision Tower - ground floor - to the south-western side</p>
            <p>📍0566240666</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
