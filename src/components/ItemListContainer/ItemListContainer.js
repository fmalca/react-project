import Alert from "react-bootstrap/Alert";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import Container from 'react-bootstrap/Container';

const ItemListContainer = ({greeting}) => {
    const initial = 1
    const stock = 5 

    return (
        <div>
            <Container fluid>
                <Alert variant="primary">    
                    {greeting}
                </Alert>            
                <ItemCount initial= {initial} stock={stock}  />
                <ItemList />
            </Container>
        </div>
   )
}

export default ItemListContainer