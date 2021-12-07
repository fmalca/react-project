import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (    
    <>
      <Container fluid>
        <NavBar />
        <ItemListContainer greeting="Soy el contenedor" />        
        <ItemDetailContainer  />
      </Container>
    </>
  );
}

export default App;
