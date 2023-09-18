import { Col, Container, Image, Row } from 'react-bootstrap';
import './Customers.css';

// Importing images
import a from '../../assets/images/businesLogo/a.png';
import b from '../../assets/images/businesLogo/b.png';
import c from '../../assets/images/businesLogo/c.png';
import d from '../../assets/images/businesLogo/d.png';
import e from '../../assets/images/businesLogo/e.png';
import f from '../../assets/images/businesLogo/f.png';
import g from '../../assets/images/businesLogo/g.png';
import h from '../../assets/images/businesLogo/h.png';
import i from '../../assets/images/businesLogo/i.png';
import j from '../../assets/images/businesLogo/j.png';
import k from '../../assets/images/businesLogo/k.png';
import l from '../../assets/images/businesLogo/l.png';


const imagePaths = [
    a,b,c,d,e,f,g,h,i,j,k,l,
];

const Customers = () => {
    return (
        <div className='mb-5' id="customers">
            <div className='customers-top pt-5'>
                <h2>Customers</h2>
                <p>
                We value close and long-term relationships with our clients, who are in a number of different industries. Here you will find both large construction companies and municipal contractor companies, but also smaller construction contractors, property owners and managers. In addition to our competence and reliability, our clients often appreciate us because we thoroughly familiarize ourselves with their projects and understand the whole.
                </p>
            </div>
            <Container className='customers-logo'>
                {imagePaths.map((image, index) => (
                    <Row key={index}>
                        {imagePaths.slice(index * 6, (index + 1) * 6).map((image, i) => (
                            <Col sm key={i}>
                                <Image fluid src={image} alt='' />
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default Customers;
