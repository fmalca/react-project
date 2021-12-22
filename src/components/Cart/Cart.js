import React, { useContext } from 'react'
import { Button,Table } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'


const Cart = () => {    
    const {cartList, clear} = useContext(CartContext)   

    const total = cartList.length?
                  cartList.map( item => item.quantity*item.price).reduce((a,b)=> a+b)   
                  :
                  0

    return (
        <>
          {
            cartList.length ? 
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {
                  cartList.map(
                    item => 
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>{item.price*item.quantity}</td>
                      <td><Button>Eliminar</Button></td>
                    </tr>
                  )
                }
                </tbody>
              </Table>
              
              <h3>{`Total del carrito = $ ${total}`}</h3>
              <Button onClick={clear} >Vaciar carrito</Button>    

            </div>        
            : 
            <p>No hay items seleccionados</p>
          }
            
        </>
    )
}

export default Cart
