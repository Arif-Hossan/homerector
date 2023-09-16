import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  Logo  from '../../../public/Logo.png';

function HeaderNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-secondary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={Logo}
                        width="100"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Homerector logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <div className='me-0'>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#">About us</Nav.Link>
                        <Nav.Link href="#">Services</Nav.Link>
                        <Nav.Link href="#">Projects</Nav.Link>
                        <Nav.Link href="#">Customers</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}

export default HeaderNavbar;