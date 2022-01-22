import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const CartWidget = () => {

    const {cartList} = useContext(CartContext)   
    
    const total =  cartList.length ? cartList.map(obj => obj.quantity).reduce((a,b) => a + b) : '' 

    return (
        <div>
            <IconButton aria-label="cart">
                {
                total
                ?
                <StyledBadge badgeContent={total} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
                :
                <ShoppingCartIcon /> 
                }
            </IconButton>           
        </div>
    )
}
export default CartWidget
