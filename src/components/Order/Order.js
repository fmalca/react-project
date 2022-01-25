import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";

import {
  addDoc,
  collection,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Order = () => {
  const [formData, setFormData] = useState({});
  const [idOrder, setIdOrder] = useState("");
  const { cartList, getTotal, clearCartList } = useContext(CartContext);
  const [error, setError] = useState("");
  const [check, setCheck] = useState(0);
  const [loading, setLoading] = useState(false);

  const formIsValid = () => {
    if (formData.name === "" || formData.name === undefined) {
      setError("Debe ingresar un nombre");
      return false;
    }
    if (formData.phone === "" || formData.phone === undefined) {
      setError("Debe ingresar teléfono");
      return false;
    }
    if (formData.email === "" || formData.email === undefined) {
      setError("Debe ingresar correo");
      return false;
    }
    if (formData.email !== check) {
      setError("Correos no coinciden");
      return false;
    }
    return true;
  };

  const createOrder = (e) => {
    e.preventDefault();

    if (formIsValid()) {
      setLoading(true);

      let order = {};
      order.date = Timestamp.fromDate(new Date());
      order.buyer = formData;
      order.total = getTotal();
      order.items = cartList.map((cartItem) => {
        const id = cartItem.id;
        const name = cartItem.title;
        const price = cartItem.price * cartItem.quantity;
        const quantity = cartItem.quantity;

        return { id, name, price, quantity };
      });

      const db = getFirestore();
      const orders = collection(db, "orders");

      addDoc(orders, order)
        .then((resp) => setIdOrder(resp.id))
        .catch((err) => console.log(err))
        .finally(() => {
          setFormData({
            name: "",
            phone: "",
            email: "",
          });
          clearCartList();
          setLoading(false);
        });        
    } else {
      alert("El formulario contiene errores");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    e.target.name === "emailcheck"
      ? setCheck(value)
      : setFormData((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      {loading ? "Cargando...." : ""}

      {idOrder ? (
        <>
          <h1>{`Se registró su orden con número: ${idOrder} `} </h1>
          <Link to="/">
            <button>Seguir comprando</button>
          </Link>
        </>
      ) : (
        <>
          <h1>ORDEN</h1>
          {error ? <h1>{error}</h1> : ""}

          <form onSubmit={createOrder}>
            <Stack spacing={2} maxWidth="md">
              <TextField
                id="name"
                name="name"
                label="Nombre"
                variant="outlined"
                size="small"
                defaultValue={formData.name || ""}
                onChange={handleChange}
              />

              <TextField
                id="phone"
                name="phone"
                label="Teléfono"
                variant="outlined"
                size="small"
                defaultValue={formData.phone || ""}
                onChange={handleChange}
              />

              <TextField
                type="email"
                id="email"
                name="email"
                label="Correo electrónico"
                variant="outlined"
                size="small"
                defaultValue={formData.email || ""}
                onChange={handleChange}
              />

              <TextField
                type="email"
                id="emailcheck"
                name="emailcheck"
                label="Repita el Correo electrónico"
                variant="outlined"
                size="small"
                defaultValue={check || ""}
                onChange={handleChange}
              />

              <Button type="submit" variant="contained">
                Enviar
              </Button>
            </Stack>
          </form>
        </>
      )}
    </>
  );
};

export default Order;
