import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useState, useEffect} from 'react'
import { getFetch } from "../../helpers/getFetch";

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true) 


    useEffect(() => {
        getFetch.then(resp => setProduct(resp[0]))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[]) 


    return (
        <>
          { loading?<h1>Cargando....</h1>:<ItemDetail product={product} />} 
        </>
    )
}

export default ItemDetailContainer
