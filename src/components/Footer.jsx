import React from 'react'
import { BsWhatsapp, BsTwitter, BsFacebook } from 'react-icons/bs' 
import { FaInstagram } from 'react-icons/fa'
import {AiFillCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
      <footer>
          <div className="contianer container__footer">

            <div className="columen col_0">
                  <a href="/Home">
                      <h4 className="lo_img">
                          Ristretto Coffee Lab
                      </h4>
                  </a>           
                  
<p className="main_footer_text">Adjust your mood with premium Italian coffee, and enjoy

With the Italian taste only in #Ristretto ☕️👌🏻

We remind you that the possibility of outside order #Takeaway is available :)

Always the right #coffee in the right place.</p>
        </div>

        <div className="columen col_1">
            <h4>Permalinkes</h4>
            <ul className="permalinkes">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="contact.html">Contact</a></li>
        </ul>
        </div>

       

        <div className="columen col_3">
            <h4>Contact us</h4>
            <p>+9883847433</p>
            <p class="email">example@gmail.com</p>
            <div class="icon_footer">
                <a href="#"> <BsFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><BsTwitter /></a>
               <a href="#"><BsWhatsapp /> </a>
            </div>
        </div>
        
        </div>
        <div className="copy">
         <p> <AiFillCopyrightCircle/> copyRight by khaled nashwan</p> 
   
          </div>
      </footer>
  )
}

export default Footer


        