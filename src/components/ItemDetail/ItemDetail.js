import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const ItemDetail = ({product}) => {
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
                        </Card.Text>            
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}

export default ItemDetail
