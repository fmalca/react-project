import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import ItemCount from "../ItemCount/ItemCount";

const Cart = () => {
  const { cartList, clearCartList, removeItem, getTotal } =
    useContext(CartContext);
  const { updateItem } = useContext(CartContext);

  const onAdd = (cant, id) => {
    updateItem({ id: id, quantity: cant });
  };

  return (
    <>
      <hr />
      {cartList.length ? (
        <Container maxWidth="lg">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Cantidad</TableCell>
                  <TableCell>Precio $US</TableCell>
                  <TableCell>Subtotal</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartList.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>
                      {" "}
                      <ItemCount
                        initial={item.quantity}
                        stock={item.stock}
                        id={item.id}
                        onAdd={onAdd}
                      />{" "}
                    </TableCell>
                    <TableCell>{item.price.toLocaleString("en-IN")}</TableCell>
                    <TableCell>
                      {(item.price * item.quantity).toLocaleString("en-IN")}
                    </TableCell>
                    <TableCell>
                      <button onClick={() => removeItem(item.id)}>
                        {" "}
                        Eliminar
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <h3>{`Total del carrito = $US ${getTotal().toLocaleString(
            "en-IN"
          )}`}</h3>
          <Button onClick={clearCartList}>Vaciar carrito</Button>
          <br />
          <br />
          <Link to="/order">
            <Button>Generar orden</Button>
          </Link>
        </Container>
      ) : (
        <div>
          <p>No hay items seleccionados</p>
          <Link to="/">
            <button>Seguir comprando</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
