import Alert from "react-bootstrap/Alert";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
    const initial = 1
    const stock = 5 

    return (
        <div>
            <Alert variant="primary">    
                {greeting}
            </Alert>            
            <ItemCount initial= {initial} stock={stock}  />
        </div>
   )
}

export default ItemListContainer