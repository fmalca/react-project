import {createContext, useState} from 'react'
import React from 'react'

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function addItem(item){
        setCartList([...cartList, item])       
    }

    function removeItem(itemId){
        const index = cartList.findIndex( x => x.id === itemId)                    
        const tempCart = [...cartList]
        tempCart.splice(index,1)
        setCartList(tempCart)
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