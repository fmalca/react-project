import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../logo.jpg";


const NavBar = () => {
    return (
        <>           
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Hogar</Nav.Link>
                        <Nav.Link href="#features">Empresa</Nav.Link>
                        <Nav.Link href="#pricing">Gamer</Nav.Link>                        
                    </Nav>                    
                    <CartWidget />
                </Container>
                
            </Navbar>
        </>
    )
}

export default NavBar;