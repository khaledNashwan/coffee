import React from 'react'
import hero_img1 from '../image/pexels-andrew-neel-4264049.jpg'
import hero_img2 from '../image/pexels-john-romanov-14689210.jpg'
import hero_img3 from '../image/pexels-zoafshaaa-14455095.jpg'
import hero_img4 from '../image/pexels-john-romanov-14689180.jpg'
import hero_img5 from '../image/nathan-dumlao-6VhPY27jdps-unsplash.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import reto from '../image/rito.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
           <div className="contianer">
          
            
            <div className="hero">
                <div className="left">
                    <img src={hero_img5} alt="" />
                </div>
                <div className="right">
                        <p>Adjust your mood with premium Italian coffee, and enjoy</p>

                        <p> With the Italian taste only in #Ristretto ☕️👌🏻</p>

                        <p> We remind you that the possibility of outside order #Takeaway is available :)</p>

                        <p> Always the right #coffee in the right place.</p>
                </div>
                </div>
                <div className="coffee_image">
                     <div className="center">
                        <img src={hero_img4} alt="" />
                        <div className="overlay">
                     <div className="text">Ristretto Coffee Lab</div>
                      </div>
                    </div>
                     <div className="center">
                        <img src={hero_img1} alt="" />
                        <div className="overlay">
                     <div className="text">Ristretto Coffee Lab</div>
                      </div>
                    </div>
                     <div className="center">
                        <img src={hero_img2} alt="" />
                        <div className="overlay">
                     <div className="text">Ristretto Coffee Lab</div>
                      </div>
                    </div>
                     <div className="center">
                        <img src={hero_img3} alt="" />
                         <div className="overlay">
                     <div className="text">Ristretto Coffee Lab</div>
                      </div>
                    </div>
                   
                </div>
                <p className='more' > <Link to='/Menu'>see more <AiOutlineArrowRight /> </Link> </p>

                <div className="hero_hjj">
                     <div className="hero_hjj_image">
                        <img src={reto} alt="" />
                        </div>
                    <p>Adjust your mood with 
                    premium Italian coffee,
                    and enjoy Italian tate 
                        only in
                        <span>
                            #Ristretto
                        </span>

                        
                        
                    </p>
                </div>
            </div>
        </header>
  )
}

export default Header