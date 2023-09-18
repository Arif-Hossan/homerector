import { Col, Container, Row } from 'react-bootstrap';
import './Services.css';
const Services = () => {
    return (
        <Container fluid id="services">
            <Row>
                <Col sm className='services'>
                    <h4>SAFE AND STABLE</h4>
                    <p>With us as a partner, you can trust that the job will be done. Our long experience in the industry, together with our reliable employees and modern machinery, creates a safe and smooth process. Under our management, many balconies, garages, parking garages and quays have had longer and safer lives.</p>
                </Col>
                <Col sm className='services'>
                    <h4>SUSTAINABLE</h4>
                    <p>We make sure that worn out and old concrete is like new again. Improving and renewing what already exists is a win not only for the environment but also for the wallet. By removing the old concrete and pouring new, the garages, balconies or parking garages can live on well into the future.</p>
                </Col>
                <Col sm className='services'>
                    <h4>COMPETENT</h4>
                    <p>
                        Our history goes back to the beginning of 1970, more specifically 1973. If you have been around for that long, you know a lot. In addition to our broad competence and deep knowledge, we also use the most modern equipment. We have large capacity and can handle large volumes of jobs.
                        Within our company there is also a water vehicle organization that we collaborate with to offer comprehensive solutions.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;