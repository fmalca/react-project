import React from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';


const ItemCount = ({initial, stock}) => {
    const [count, setCount] = useState(initial)
    
    const add = () => { 
        if (count+1 <= stock )       
         setCount(count + 1)   
    }

    const substract = () => {
        if (count-1 >= initial)
        setCount(count - 1)   
    }

    return (
        <div>
            <Button variant="secondary" size="lg" onClick={substract} >
                - 
            </Button>{'  '}
            <Button variant="success" size="lg">
            {count}
            </Button>{'  '}
            <Button variant="secondary" size="lg" onClick={add} >            
                + 
            </Button>
        </div>
    )
}

export default ItemCount
