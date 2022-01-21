import React, { useState,useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({product}) => {

    const [gotoCart, setGoToCart] = useState(false);  
    const {addItem} = useContext(CartContext)       

    const onAdd = (cant) => {                
        addItem({...product,quantity:cant })
        setGoToCart(true)
    }

    return (        
        <>  <hr/>
            <div>  
                <div>
                    <div>Detalle del producto</div>
                    <img src={product.pictureUrl} alt="" />
                    <div>
                        <div>{product.title}</div>
                        <div>
                            <li>ID: {product.id}</li>
                            <li>Descripción: {product.description}</li>
                            <li>Precio: $ {product.price}</li>                
                            <li>Stock: {product.stock} unidades</li>                
                        </div>                                                            
                    </div>                    
                </div>
                <div >
                    <div>                    
                    { !gotoCart
                    ? <ItemCount item={product} onAdd={onAdd} /> 
                    : <center><Link to="/Cart"><button >Terminar mi compra</button></Link></center>                    
                    }  
                    </div>
                </div>
            </div>               
        </>
    )
}

export default ItemDetail
