import Alert from "react-bootstrap/Alert";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import Container from 'react-bootstrap/Container';
import { getFetch } from "../../helpers/getFetch";
import {useState, useEffect} from "react";

const ItemListContainer = ({greeting}) => {
    const initial = 1
    const stock = 5 
    const [products, setProducts] = useState([])

    useEffect(() => {
        getFetch.then(resp => setProducts(resp))
    },[])    

    return (
        <div>
            <Container fluid>
                <Alert variant="primary">    
                    {greeting}
                </Alert>            
                <ItemCount initial= {initial} stock={stock}  />
                <ItemList data={products} />
            </Container>
        </div>
   )
}

export default ItemListContainer