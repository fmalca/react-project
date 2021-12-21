import {createContext, useState} from 'react'
import React from 'react'

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function addItem(item){
        setCartList([...cartList, item])
        console.log(cartList)
    }

    function removeItem(itemid){
        console.log(`removeItem id=${itemid}`)        
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