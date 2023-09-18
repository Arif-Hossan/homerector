import { Col, Container, Image, Row } from "react-bootstrap";
import './Footer.css';
import Logo from '../../../public/logo.png'
const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row>
                <Col sm className="mb-3">
                    <h5>POSTAL ADDRESS</h5>
                    <h6>Homerector</h6>
                    <p>Wolffburgh</p>
                    <p>24886 , North Dakota</p>
                </Col>
                <Col sm className="mb-3">
                    <h5>VISIT ADDRESS</h5>
                    <h6>Homerector</h6>
                    <p>Quitzonmouth</p>
                    <p>24880 , North Carolina</p>
                </Col>
                <Col sm className="mb-3">
                    <h5 style={{ color: "#f78f1e" }}>Billing ADDRESS</h5>
                    <h6>Homerector</h6>
                    <p>Pack 12, UE 538</p>
                    <p>24800 , Carolina</p>
                    <p style={{ color: "#f78f1e" }}>homerector@db.com</p>
                </Col>
                <Col sm className="pt-5">
                    <Image src={Logo} fluid></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;