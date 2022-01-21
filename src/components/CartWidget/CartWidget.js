import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {cartList} = useContext(CartContext)   
    
    const total =  cartList.length ? cartList.map(obj => obj.quantity).reduce((a,b) => a + b) : '' 

    return (
        <div>
            <div>Carrito</div><div>{total}</div>
        </div>
    )
}
export default CartWidget
