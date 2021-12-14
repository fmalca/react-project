import Alert from "react-bootstrap/Alert";
import ItemList from "../ItemList/ItemList";
import Container from 'react-bootstrap/Container';
import { getFetch } from "../../helpers/getFetch";
import {useState, useEffect} from "react";
import { useParams} from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true) 

    const {idCat} = useParams()    

    useEffect(() => {
        if(idCat){
            getFetch.then(resp => setProducts(resp.filter(prod=>prod.category===idCat)))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        } else {
            getFetch.then(resp => setProducts(resp))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }
    },[idCat]) 

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