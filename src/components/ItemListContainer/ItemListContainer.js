import Alert from "react-bootstrap/Alert";

const ItemListContainer = ({greeting}) => {


    return (
        <div>
            <Alert variant="primary">    
                {greeting}
            </Alert>
        </div>
   )
}

export default ItemListContainer