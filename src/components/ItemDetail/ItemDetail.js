import React, { useState,useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ItemDetail = ({product}) => {

    const [gotoCart, setGoToCart] = useState(false);  
    const {addItem} = useContext(CartContext)       

    const onAdd = (cant) => {                
        addItem({...product,quantity:cant })
        setGoToCart(true)
    }

    return (        
        <>  
        <br/>
        <Container maxWidth="md">
               <Card sx={{ maxWidth: 520 }}  >
            <CardMedia
                style={{
                width: "100%",
                maxHeight: "300px"
                }}
                component="img"                
                image={product.pictureUrl}
                alt="foto"
            />           
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <List>
                    <ListItem>
                        <ListItemText> 
                            ID: {product.id}
                        </ListItemText>
                    </ListItem>                        
                    <ListItem>
                        <ListItemText> 
                        Descripción: {product.description}                        
                        </ListItemText>
                    </ListItem>                        
                    <ListItem>                        
                        <ListItemText> 
                        Precio: $ {product.price}
                        </ListItemText>
                    </ListItem>    
                        <ListItem>
                        <ListItemText> 
                        Stock: {product.stock} unidades
                        </ListItemText>                    
                        </ListItem> 
                </List>
             
                
                </Typography>
            </CardContent>
            <CardActions>
            <div>                    
                    { !gotoCart
                    ? <ItemCount stock={product.stock} onAdd={onAdd} /> 
                    : <center><Link to="/Cart"><Button >Terminar mi compra</Button></Link></center>                    
                    }  
                    </div>                      

                
            </CardActions>
        </Card>                
        </Container>



            
        </>
    )
}

export default ItemDetail
