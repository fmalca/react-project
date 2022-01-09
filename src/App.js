import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';
import Order from './components/Order/Order';


function App() {
  return (    
    <>
      <CartContextProvider>
        <Container fluid>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route 
                exact 
                path="/" 
                element= {<ItemListContainer greeting="Soy el contenedor" /> } />
              <Route 
                exact
                path="/categoria/:idCat" 
                element= {<ItemListContainer greeting="Soy el contenedor" /> } />
              <Route 
                exact
                path="/detalle/:id" 
                element= { <ItemDetailContainer  /> } />            
              <Route 
                exact 
                path="/cart" 
                element= { <Cart /> } />            
              <Route 
                exact 
                path="/order" 
                element= { <Order /> } />                  
            </Routes>
          </BrowserRouter>
        </Container>
      </CartContextProvider>
    </>
  );
}

export default App;
