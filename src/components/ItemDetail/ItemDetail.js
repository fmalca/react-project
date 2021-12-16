import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

const ItemDetail = ({product}) => {

    const [gotoCart, setGoToCart] = useState(false);  
    
    const onAdd = (cant) => {        
        console.log(cant)
        setGoToCart(true)
    }

    return (        
        <>  <hr/>
            <Row className="justify-content-md-center">  
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Detalle del producto</Card.Header>
                    <Card.Img variant="top" src={product[0].pictureUrl} />
                    <Card.Body>
                        <Card.Title>{product[0].title}</Card.Title>
                        <Card.Text>
                            <li>ID: {product[0].id}</li>
                            <li>Descripción: {product[0].description}</li>
                            <li>Precio: $ {product[0].price}</li>                
                            <li>Stock: {product[0].stock} unidades</li>                
                        </Card.Text>                                                            
                    </Card.Body>                    
                </Card>
                <Card style={{ width: '18rem' }} >
                    <Card.Body className="align-items-center">                    
                    { !gotoCart
                    ? <ItemCount initial={1} stock={product[0].stock} onAdd={onAdd} /> 
                    : <center><Link to="/Cart"><Button variant="secondary" size="sm">Terminar mi compra</Button></Link></center>                    
                    }  
                    </Card.Body>
                </Card>
            </Row>               
        </>
    )
}

export default ItemDetail
