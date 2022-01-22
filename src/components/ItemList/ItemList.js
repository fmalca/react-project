import React from 'react'
import Item from '../Item/Item'
import Grid from '@mui/material/Grid';

const ItemList = ({data}) => {      

    return (
        <>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {data.map(
                product => (

                <Grid item xs={2} sm={4} md={4} key={product.id}>                
                    <Item 
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      pictureUrl={product.pictureUrl}
                      category = {product.category} 
                       />                
                </Grid>
                )
            )
            }      
            </Grid>
        </>
    )
}

export default ItemList
