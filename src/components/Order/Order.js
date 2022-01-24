import React,{ useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../../context/CartContext'

//import {  addDoc, doc, collection, getFirestore, Timestamp, writeBatch, query, where, getDocs, documentId } from "firebase/firestore"
import {  addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';

const Order = () => {
    const [formData, setFormData] = useState({})
    const [idOrder, setIdOrder] = useState('')  
    const {cartList,getTotal,clearCartList} = useContext(CartContext)   
    const [error, setError] = useState("")
    const [check, setCheck] = useState(0)    
    const [loading, setLoading] = useState(false)

    const formIsValid = () => {        
        if (formData.name === "" || formData.name===undefined){
            setError("Debe ingresar un nombre")
            return false
        }
        if (formData.phone === "" || formData.phone===undefined){
            setError( "Debe ingresar teléfono")
            return false
        }
        if (formData.email ==="" || formData.email === undefined ){            
            setError( "Debe ingresar correo")
            return false
        }
        if (formData.email !== check){
            setError("Correos no coinciden")
            return false
        }
        return true
    }
    
  
    const createOrder = (e) =>{
        e.preventDefault()        
       
        if (formIsValid()){        

            setLoading(true)

            let order = {}                        
            order.date = Timestamp.fromDate(new Date());    
            order.buyer = formData
            order.total = getTotal();
            order.items = cartList.map(cartItem => {
                const id = cartItem.id
                const name = cartItem.title
                const price = cartItem.price * cartItem.quantity
                const quantity = cartItem.quantity
                
                return {id, name, price, quantity}   
            })                  
            

            const db = getFirestore()
            const orders = collection(db,'orders')
        
            addDoc(orders,order)
            .then(resp => setIdOrder(resp.id))
            .catch(err=> console.log(err))
            .finally(()=> { 
                    setFormData({
                        name:'',
                        phone:'',
                        email: ''
                        }
                    )                    
                    clearCartList()
                    setLoading(false)
                }
            )   
                
            /* TO DO
            const dbItems = collection(db, 'items')
            const queryIds = query(
                dbItems, where( documentId() , 'in', cartList.map(item => item.id))          
            )
            
            const batch = writeBatch(db)                               
   
            getDocs(queryIds)
            .then(resp => resp.docs.forEach(res => {
                let ref = doc(db, "items", res.id);
                batch.update(ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
                })
            }))         
           
            batch.commit()            
            */
            

        } 
        else {
            alert("El formulario contiene errores")
        }



    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        e.target.name === "emailcheck" ?
            setCheck(value)
        :
            setFormData( values => ({...values, [name] : value }))
    }

    return (
            <>
                
                {loading  ? "Cargando....": ""}

                {idOrder ?                     
                    <>                           
                        <h1>{`Se registró su orden con número: ${idOrder} `} </h1>     
                        <Link to ="/"><button>Seguir comprando</button></Link>         
                    </>                        
                    :
                    <>
                        <h1>ORDEN</h1>                        
                        { error?<h1>{error}</h1>:""}                        
                        <Box
                            display="flex"
                            width={500} height={80}
                            alignItems="center"
                            justifyContent="center"
                        >
                        <form 
                            onSubmit={createOrder}                    
                            >

                            <input
                                type="text" 
                                placeholder="Nombre"
                                name="name"
                                value= {formData.name || ""}                        
                                onChange={handleChange}
                            />
                            <br />         
                            <input
                                type="text" 
                                placeholder="Teléfono"
                                name="phone"
                                value= {formData.phone || ""}                        
                                onChange={handleChange}
                            />
                            <br />                                  

                            <input
                                type="email" 
                                placeholder="Correo electrónico"
                                name="email"
                                value= {formData.email || ""}                        
                                onChange={handleChange}
                            />
                            <br /> 

                            <input
                                type="email" 
                                placeholder="Repita el correo electrónico"
                                name="emailcheck"
                                value= {check || ""}                        
                                onChange={handleChange}
                            />
                            <br /> 

                            <button  type="submit">
                                Enviar
                            </button>
                        </form>
                        </Box>
                    </>
                }
            </>
    )
}

export default Order