import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import Order from "./components/Order/Order";

function App() {
  return (
    <>
      <CartContextProvider>        
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                exact
                path="/"
                element={<ItemListContainer />}
              />
              <Route
                exact
                path="/category/:idCat"
                element={<ItemListContainer />}
              />
              <Route
                exact
                path="/detail/:id"
                element={<ItemDetailContainer />}
              />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/order" element={<Order />} />
            </Routes>
          </BrowserRouter>        
      </CartContextProvider>
    </>
  );
}

export default App;
