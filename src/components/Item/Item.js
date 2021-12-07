import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ( {id, title, description,price, pictureUrl} ) => {    
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                <li>ID: {id}</li>
                <li>Descripción: {description}</li>
                <li>Precio: {price}</li>                
            </Card.Text>            
        </Card.Body>
        </Card>
        </>
    )
}
export default Item