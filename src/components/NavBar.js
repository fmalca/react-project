import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="pclogo.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            CompuTienda</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">¿Quiénes somos?</Nav.Link>
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Hogar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Empresas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Gamer</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Servicio al cliente</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar;