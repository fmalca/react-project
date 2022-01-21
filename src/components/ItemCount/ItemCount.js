import React from 'react'
import {useState} from 'react'

const ItemCount = ({item, onAdd}) => {
    const [count, setCount] = useState(1)

    const add = () => { 
        if (count < item.stock )       
         setCount(count => count + 1)   
    }

    const substract = () => {
        if (count > 1)
        setCount(count => count - 1)   
    }

    return (
        <>  
            <center>
                <button  onClick={substract} >
                    - 
                </button>

                <button >
                {count}
                </button>                          

                <button onClick={add} >            
                    + 
                </button>
                <br/>
                <br/>
                <button  onClick={() => onAdd(count)} >            
                    Agregar al carrito
                </button>

            </center>
        </>
    )
}

export default ItemCount
