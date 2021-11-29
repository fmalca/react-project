import { BsCart } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";

const CartWidget = () => {
    return (
        <div>
            <BsCart /><Badge bg="danger">0</Badge>
        </div>
    )
}
export default CartWidget
