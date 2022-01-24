import React from 'react'
import {useState} from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ItemCount2 = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const add = () => { 
        if (count < stock )       
         setCount(count => count + 1)   
    }

    const substract = () => {
        if (count > 1)
        setCount(count => count - 1)   
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
                </Stack>
            </Box>
            <Box
                display="flex"
                width={500} height={80}
                alignItems="center"
                justifyContent="center"
            >
                <Button size="small"  onClick={() => onAdd(count)} variant="contained">Agregar al carrito</Button>
            </Box>
        </>
    )
}

export default ItemCount2
