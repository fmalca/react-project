import React from 'react'
import {useState} from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ItemCount = ({initial, stock, onAdd, id, where}) => {
    const [count, setCount] = useState(initial)

    const add = () => { 
        if (count < stock ) {      
             setCount(count => count + 1)   
            if (where==="count") onAdd(count+1,id)
        }
    }

    const substract = () => {
        if (count > 1){
            setCount(count => count - 1)
            if (where==="count") onAdd(count-1,id)
        }   
    }

    return (
        <>
            <Box
                display="flex"
                width={500} height={80}
                alignItems="center"
                justifyContent="center"
            >
                <Stack spacing={2} direction="row">
                    <Button size="small" onClick={substract} variant="contained">-</Button>
                    <Button size="small"  variant="text">{count}</Button>
                    <Button size="small"  onClick={add} variant="contained">+</Button>
                    { where==='action'?<Button size="small"  onClick={() => onAdd(count, id)} variant="contained">Agregar al carrito</Button>:""}
                </Stack>
            </Box>

        </>
    )
}

export default ItemCount
