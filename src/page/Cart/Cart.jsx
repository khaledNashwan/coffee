import React, { useContext, useState } from 'react'
import './cart.css'
import {AiOutlineClose , AiFillPlusSquare , AiFillMinusSquare} from 'react-icons/ai'
import CartContext from '../../context/cartContext'
import ModelTow from '../../components/ModelTow'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'

const Cart = () => {
    const [openModaltwo, setOpenModaltwo] = useState(false);

  const {cartItemLength , cartItem , removeFromCart , addToCart} = useContext(CartContext)
  return (
    <>
             <Navbar />
      {cartItemLength === 0 ?
        <div className=" contianer empty">
          Your cart empty
          <Link to='/Menu'>
            <h1 className='empty_hea' >Menu ... </h1>
          </Link>
        </div>
        
        :
        <div className='contianer Cart '>
          <div className='contianer Cart_contianer'>
            {cartItem.map((cartitem) => (
              <div className="cart_item">
                <img src={cartitem.images} alt={cartitem.title} />
                <h3 className="title">{cartitem.title}</h3>
                <div className="qu_plu">
                  <button disabled={cartitem.quantity <= 1} onClick={() => addToCart({ ...cartitem, quantity: cartitem.quantity - 1 })}>
                  <AiFillMinusSquare  />
                  </button>
                  <p className="price">{cartitem.quantity}</p>
                  
                  <button onClick={() => addToCart({ ...cartitem, quantity: cartitem.quantity + 1 })}>
                    <AiFillPlusSquare  />
                  </button> 

                  </div>
                <p className="price">${cartitem.price * cartitem.quantity}</p>

                <div onClick={() => removeFromCart(cartitem.id)} className="exit_icone">
                  <AiOutlineClose />
                </div>
              </div>
        
            ))}
     
          </div>
           

          {cartItemLength > 0 && (
            <div className="btn_comfor">
              <button onClick={() => setOpenModaltwo(true)} className='btn_pro olo' type="submit">Confirmation</button>
            </div>
          )
          }

          <div className="cart-summary-total">
            total-Price: 
              <span>
                {cartItem
                  .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                  .toFixed(2)}
                $
              </span>
            
            </div>

          {openModaltwo && <ModelTow setOpenModaltwo={setOpenModaltwo} />}

        </div>}
      </>
  )
}
export default Cart

