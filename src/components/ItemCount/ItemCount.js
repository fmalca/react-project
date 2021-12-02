import React from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';


const ItemCount = ({initial, stock}) => {
    const [count, setCount] = useState(initial)
    
    const aumenta = () => { 
        if (count+1 <= stock )       
         setCount(count + 1)   
    }

    const disminuye = () => {
        if (count-1 >= initial)
        setCount(count - 1)   
    }

    return (
        <div>
            <Button variant="secondary" size="lg" onClick={disminuye} >
                - 
            </Button>{'  '}
            <Button variant="success" size="lg">
            {count}
            </Button>{'  '}
            <Button variant="secondary" size="lg" onClick={aumenta} >            
                + 
            </Button>
        </div>
    )
}

export default ItemCount
