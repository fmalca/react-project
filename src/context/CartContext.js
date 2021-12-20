import {createContext, useState} from 'react'
import React from 'react'

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function addItem(id, quantity){
        setCartList([...cartList, {id, quantity}])
    }

    function removeItem(itemid){
        console.log("removeItem()")        
    }

    function clear(){
        setCartList([])
    }

    function isInCart(id){
        return cartList.find( obj => obj.id === id) !== undefined
    }


    return (
        <>
           <CartContext.Provider value = {
               {cartList,
               setCartList,
               addItem,
               removeItem,
               clear,
               isInCart
               }
           }>
            {children}
           </CartContext.Provider>             
        </>
    )
}