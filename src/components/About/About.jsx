import { Container } from 'react-bootstrap';
import './About.css';
const About = () => {
    return (
        <Container className="ct" id="about" >
            <div className='about-us'>
            <div>
                <h1>About Us</h1>
            </div>
            <div>
                <p>With almost 50 years in the industry, we dare to say that we know most things about concrete work. We mainly work with the renovation of existing concrete structures. You could say that we breathe new life into old concrete. Innovating and improving is not only a sustainable way of handling concrete, but also economically beneficial. Homerector is a family business that has been passed down for generations. We continue to manage our heritage, where long-termism, responsibility and fighting spirit run like a common thread through the decades. Together with our driven employees, we deliver top-class concrete jobs.</p>
            </div>
        </div>
        </Container>
    );
};

export default About;