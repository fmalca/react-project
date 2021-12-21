import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const Cart = () => {
    const {cartList} = useContext(CartContext)   

    return (
        <>
          {cartList.map(
            item =>             
            <li key={item.id}>{item.title} {' -> ' }{item.quantity}</li>
          )
          }
        </>
    )
}

export default Cart
