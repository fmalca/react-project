import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useState, useEffect} from 'react'
import { getFetch } from "../../helpers/getFetch";
import { useParams} from "react-router-dom";

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true) 
    
    const {id} = useParams()

    useEffect(() => {
        getFetch.then(resp => setProduct(resp.filter(prod=>prod.id===parseInt(id))))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[id]) 

    return (
        <>
          { loading?<h1>Cargando....</h1>:<ItemDetail product={product[0]} />} 
        </>
    )
}

export default ItemDetailContainer
