import Alert from "react-bootstrap/Alert";
//import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import Container from 'react-bootstrap/Container';
import { getFetch } from "../../helpers/getFetch";
import {useState, useEffect} from "react";

const ItemListContainer = ({greeting}) => {
    //const initial = 1
    //const stock = 5 
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true) 


    useEffect(() => {
        getFetch.then(resp => setProducts(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[]) 

    return (
        <div>
            <Container fluid >  
                               
                { loading ? <Alert variant="info">Cargando datos ...</Alert>                             
                            : <ItemList data={products} /> }               
                              
            </Container>
        </div>
   )
}

export default ItemListContainer