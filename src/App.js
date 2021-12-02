import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (    
    <>
      <Container fluid>
        <NavBar />
        <ItemListContainer greeting="Soy el contenedor" />        
      </Container>
    </>
  );
}

export default App;
