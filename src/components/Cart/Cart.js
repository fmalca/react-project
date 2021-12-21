import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'


const Cart = () => {    
    const {cartList, clear} = useContext(CartContext)    
    return (
        <>
          {cartList.map(
            item =>             
            <li key={item.id}>{item.title} {' -> ' }{item.quantity}</li>
          )
          }

          {
            cartList.length ? 
            <Button onClick={clear} >Vaciar carrito</Button>            
            : 
            <p>No hay items seleccionados</p>
          }
            
        </>
    )
}

export default Cart
