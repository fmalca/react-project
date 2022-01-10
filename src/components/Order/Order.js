import React,{ useContext } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { CartContext } from '../../context/CartContext'

import {  addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"

const Order = () => {
    const [formData, setFormData] = useState({})
    const [idOrder, setIdOrder] = useState('')  
    const {cartList,getTotal,clear} = useContext(CartContext)   
    const [errors, setErrors] = useState([])
    const [check, setCheck] = useState(0)

    const formIsValid = () => {
        let isValid = true
        if (formData.name === "" || formData.name===undefined){
            setErrors( ...errors,"Debe ingresar un nombre")
            isValid = false
        }
        if (formData.phone === "" || formData.phone===undefined){
            setErrors( ...errors,"Debe ingresar teléfono")
            isValid = false
        }
        if (formData.email ==="" || formData.email === undefined ){            
            setErrors( ...errors,"Debe ingresar correo")
            isValid = false
        }
        if (formData.email !== check){
            setErrors( ...errors, "Correos no coinciden")
            isValid = false
        }
        return isValid
    }
  
    const createOrder = (e) =>{
        e.preventDefault()        
       
        if (formIsValid){        
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
                    clear()
                }
            )        
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
                <h2>ORDEN</h2>

                {idOrder ?
                        <h1>{`Su número de orden es ${idOrder} `} </h1>
                    :
                        <>
                        {errors}
                        <Form 
                            onSubmit={createOrder}                    
                            >

                            <Form.Control                         
                                type="text" 
                                placeholder="Nombre"
                                name="name"
                                value= {formData.name || ""}                        
                                onChange={handleChange}
                            />
                            <br />         
                            <Form.Control                         
                                type="text" 
                                placeholder="Teléfono"
                                name="phone"
                                value= {formData.phone || ""}                        
                                onChange={handleChange}
                            />
                            <br />                                  

                            <Form.Control 
                                type="email" 
                                placeholder="Correo electrónico"
                                name="email"
                                value= {formData.email || ""}                        
                                onChange={handleChange}
                            />
                            <br /> 

                            <Form.Control 
                                type="email" 
                                placeholder="Repita el correo electrónico"
                                name="emailcheck"
                                value= {check || ""}                        
                                onChange={handleChange}
                            />
                            <br /> 

                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Form>
                        </>
                }
            </>
    )
}

export default Order