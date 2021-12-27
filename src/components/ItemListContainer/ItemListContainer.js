import Alert from "react-bootstrap/Alert";
import ItemList from "../ItemList/ItemList";
import Container from 'react-bootstrap/Container';
import {useState, useEffect} from "react";
import { useParams} from "react-router-dom";

import {collection, getFirestore, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true) 
    const {idCat} = useParams()                  

    useEffect(() => {
        const db = getFirestore()
        const items = 
            idCat
            ? query(collection(db,'items'),where('category','==',idCat))       
            : collection(db,'items')         

        getDocs(items)
        .then(resp => setProducts( resp.docs.map( prod => ({id:prod.id, ...prod.data()}) ) ))
        .catch( err => console.log(err))
        .finally( () => setLoading(false))

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