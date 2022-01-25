import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = ({ id, title, pictureUrl }) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        style={{
          width: "100%",
          maxHeight: "240px",
        }}
        component="img"
        image={pictureUrl}
        alt="foto"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/detail/${id}`}>Ver detalle</Link>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Item;
