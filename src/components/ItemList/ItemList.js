import React from 'react'
import Item from '../Item/Item'

const ItemList = () => {   

    return (
        <>
          <Item id={1} title={"Impresora LX2050"} price={550.00} pictureURL={"www.google.com"} />
          <Item id={2} title={"Laptop Lenovo 15\""} price={2550.00} pictureURL={"www.google.com"} />
        </>
    )
}

export default ItemList
