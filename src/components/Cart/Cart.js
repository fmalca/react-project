import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Cart = () => {
    const initial = 1
    const stock = 5

    return (
        <>
          <ItemCount initial={initial} stock={stock}/>
        </>
    )
}

export default Cart
