import React from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({initial, stock}) => {
    const [count, setCount] = useState(initial)

    const add = () => { 
        if (count < stock )       
         setCount(count => count + 1)   
    }

    const substract = () => {
        if (count > initial)
        setCount(count => count - 1)   
    }

    const onAdd = () => {
        console.log("Agregando al carrito de compras...")        
    }

    return (
        <>  <center>
            <Button variant="secondary" size="lg" onClick={substract} >
                - 
            </Button>
            
            <Button variant="success" size="lg">
            {count}
            </Button>
            
            <Button variant="secondary" size="lg" onClick={add} >            
                + 
            </Button>
            <br/>

            <Button variant="primary" size="lg" onClick={onAdd} >            
                Agregar al carrito 
            </Button>

            </center>
        </>
    )
}

export default ItemCount
