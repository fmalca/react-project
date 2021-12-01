import React from 'react'
import {useState} from 'react'

const ItemCount = () => {
    const [count, setCount] = useState(0)
    const [stockMax] = useState(3)
    const [stockMin] = useState(0)

    const aumenta = () => { 
        if (count+1 <= stockMax )       
         setCount(count + 1)   
    }

    const disminuye = () => {
        if (count-1 >= stockMin)
        setCount(count - 1)   
   }


    return (
        <div>
            <button onClick={disminuye}>
                - 
            </button>
            <button>
            {count}
            </button>
            <button onClick={aumenta}>
                + 
            </button>
        </div>
    )
}

export default ItemCount
