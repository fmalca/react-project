import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import Loading from "../Loading/Loading";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const item = doc(db, "items", id)
        getDoc(item)
            .then(resp => setProduct({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id])

    return (
        <> 
            {loading?<Loading />:<ItemDetail product={product} />}
        </>
    )
}

export default ItemDetailContainer
