import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../public/Logo.png';
import "./HeaderNavbar.css";

function HeaderNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="fixed-top header-navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={Logo}
                        width="150"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Homerector logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">

                    <Nav>
                        <Nav.Link className='navbar-item' href="#about">About us</Nav.Link>
                        <Nav.Link className='navbar-item' href="#services">Services</Nav.Link>
                        <Nav.Link className='navbar-item' href="#projects">Projects</Nav.Link>
                        <Nav.Link className='navbar-item' href="#customers">Customers</Nav.Link>
                        <Nav.Link className='navbar-item' href="#contact">Contact</Nav.Link>


                    </Nav>





                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default HeaderNavbar;