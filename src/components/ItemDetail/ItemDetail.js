import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const ItemDetail = ({product}) => {
    return (        
        <>  <hr/>
            <Row className="justify-content-md-center">  
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Detalle del producto</Card.Header>
                    <Card.Img variant="top" src={product.pictureUrl} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            <li>ID: {product.id}</li>
                            <li>Descripción: {product.description}</li>
                            <li>Precio: $ {product.price}</li>                
                        </Card.Text>            
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}

export default ItemDetail
