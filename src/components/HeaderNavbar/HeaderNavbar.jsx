import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../public/Logo.png';
import "./HeaderNavbar.css";

function HeaderNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="transparent">
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
                        <Nav.Link className='navbar-item' href="#">About us</Nav.Link>
                        <Nav.Link className='navbar-item' href="#">Services</Nav.Link>
                        <Nav.Link className='navbar-item' href="#">Projects</Nav.Link>
                        <Nav.Link className='navbar-item' href="#">Customers</Nav.Link>
                        <Nav.Link className='navbar-item' href="#">Contact</Nav.Link>


                    </Nav>





                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default HeaderNavbar;