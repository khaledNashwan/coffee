import React, { useState } from 'react'
import CartContext from './cartContext'

const CartProvider = ({ children }) => {
    
      const [cartItem , setCartItem] = useState([]);
    
    /*add to cart */
    const addToCart = (item) => {
        const isExit = cartItem.find(cart => cart.id === item.id)
        if (isExit) {
            setCartItem(cartItem.map((cartIt) => cartIt.id ===item.id ? item : cartIt ))
        } else {
                setCartItem(prev => [...prev , item])
        }
    }
    
    /*remove from cart */
     const removeFromCart = (id) => {
         const cart = cartItem.filter(c => c.id !== id)
        setCartItem(cart) 
    }


    return (
        <CartContext.Provider value={{
            cartItem,
            addToCart,
            removeFromCart,
            cartItemLength: cartItem.length,
        }}>
            {children}
        </CartContext.Provider>
  )
}

export default CartProvider