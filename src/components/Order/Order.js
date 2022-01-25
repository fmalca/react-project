import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Order = ( {formData,check,error,createOrder,handleChange}) => {
  return (
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
  );
};

export default Order;
