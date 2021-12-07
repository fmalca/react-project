import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const Item = ( {id, title, description,price, pictureUrl} ) => {    
    return (
        <>        
        <Row className="justify-content-md-center">  
            
            <Card style={{ width: '18rem' }}>                
                <Card.Img variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>          
                </Card.Body>
            </Card>
        </Row>
        </>
    )
}
export default Item