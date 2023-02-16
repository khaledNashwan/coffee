import React, { useState } from 'react'
import { AiOutlineClose  } from 'react-icons/ai'
import img_pay from '../image/paypal.png'
import img_pay1 from '../image/visa.png'
import img_pay2 from '../image/apple-pay.png'


import ModelThree from './ModelThree';
import './modelTow.css'


const ModelTow = ({ setOpenModaltwo }) => {
        const [openModalthree, setOpenModalthree] = useState(false);

  
  const formHandler = (e) => {
    e.preventDefault()
  }
 return (
      <div className='modeltwo_contianer'>
          <div className="modeltwo_content">
               <div  className="icone_two">
                 <AiOutlineClose onClick={() => setOpenModaltwo(false) } />
             </div>
       <div className="model_wrapper">
         <form className="contact-form" >
           <label className="pay" htmlFor="">We accept  
             <img src={img_pay} alt="" />
             <img src={img_pay1} alt="" />
             <img src={img_pay2} alt="" />
             
           </label>
           <input type="number" name="" placeholder='0000 / 0000 / 0000' />
                    <div className="form-name">
                    <input type="text" name="First Name" placeholder="First Name" required />
                    <input type="text" name="Last Name" placeholder="Last Name" required />
           </div>
                    <input type="email" name="Email Address" placeholder=" your Email Address" required />
           <input className='your_a' type="text" name="Your Address" placeholder="Your Address" required />

                    <button  onClick={() => setOpenModalthree(true) } className="btn btn_mo" type="submit">send</button>
                 </form>
           </div>

     </div>
     
       {openModalthree && <ModelThree  setOpenModalthree={setOpenModalthree} />}

      </div>
  )  
}

export default ModelTow