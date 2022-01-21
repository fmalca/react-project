import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const Cart = () => {    
    const {cartList, clearCartList, removeItem, getTotal} = useContext(CartContext)       

    return (
        <>
          {
            cartList.length ? 
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio $US</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {
                  cartList.map(
                    item => 
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price.toLocaleString('en-IN')}</td>
                      <td>{(item.price*item.quantity).toLocaleString('en-IN')}</td>
                      <td><button onClick={() => removeItem(item.id) }> Eliminar</button></td>
                    </tr>
                  )
                }
                </tbody>
              </table>
              
              <h3>{`Total del carrito = $US ${getTotal().toLocaleString('en-IN')}`}</h3>
              <button onClick={clearCartList} >Vaciar carrito</button>    
              <br/>
              <br/>
              <Link to ="/order"><button>Generar orden</button></Link>

            </div>        
            : 
            <div>
              <p>No hay items seleccionados</p>
              <Link to ="/"><button>Seguir comprando</button></Link>
            </div>
          }
            
        </>
    )
}

export default Cart
