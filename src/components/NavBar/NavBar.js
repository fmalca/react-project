import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../logo.jpg";
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <>           
            <Navbar bg="light" variant="light">
                <Container fluid>
                    <Navbar.Brand ><Link to ="/"><img src={logo} alt="" /></Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to ="/categoria/hogar">Hogar</Link>
                        <Link to ="/categoria/empresa">Empresa</Link>
                        <Link to ="/categoria/gamer">Gamer</Link>
                    </Nav>                    
                    <CartWidget />
                </Container>
                
            </Navbar>
        </>
    )
}

export default NavBar;