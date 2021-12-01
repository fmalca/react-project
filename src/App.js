import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (    
    <>
      <Container fluid>
        <NavBar />
        <ItemListContainer greeting="Soy el contenedor" />
        <ItemCount />
      </Container>
    </>
  );
}

export default App;
