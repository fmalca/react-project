import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import Loading from "../Loading/Loading";

import {
  addDoc,
  collection,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import Order from "../Order/Order";

const OrderContainer = () => {
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
      setError("");

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
        .catch((err) => alert("Se produjo un error"))
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
      {loading ? <Loading /> : ""}

      {idOrder ? (
        <>
          <h1>{`Se registró su orden con número: ${idOrder} `} </h1>
          <Link to="/">
            <button>Seguir comprando</button>
          </Link>
        </>
      ) : (
        <>                 
          <Order            
            formData={formData}
            check={check}
            error={error}
            createOrder={createOrder}
            handleChange={handleChange}
          />
        </>
      )}
    </>
  );
};

export default OrderContainer;
