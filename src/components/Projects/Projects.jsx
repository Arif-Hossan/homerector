import { Col, Container, Image, Row } from 'react-bootstrap';
import './Project.css';

// Importing images
import Bokstodet_1 from '../../assets/images/Bokstodet_1.jpg';
import Annebodavagen25bild from '../../assets/images/Annebodavagen25bild.jpg';
import Bokstodet_4 from '../../assets/images/Bokstodet_4.jpg';
import Predikant_gjut_3 from '../../assets/images/Predikant_gjut_3.jpg';
import Borrsvangen_1 from '../../assets/images/Borrsvangen_1.jpg';
import BrfOttars2 from '../../assets/images/BrfOttars2.jpg';
import dn3 from '../../assets/images/dn3.jpg';
import Tingvallavagen_fasad_1 from '../../assets/images/Tingvallavagen_fasad_1.jpg';
import loke_puff from '../../assets/images/loke_puff.jpg';
import Maln_pelare_Biet from '../../assets/images/Maln_pelare_Biet.jpg';
import Namndeman_2 from '../../assets/images/Namndeman_2.jpg';
import Predikant_bilad_terrass from '../../assets/images/Predikant_bilad_terrass.jpg';
import Ringgarden_4724 from '../../assets/images/Ringgarden_4724.jpg';
import Sagvagen from '../../assets/images/Sagvagen.jpg';
import Sorklippan from '../../assets/images/Sorklippan.jpg';
import Stenbrottet_6690 from '../../assets/images/Stenbrottet_6690.jpg';
import Tallid_fasad from '../../assets/images/Tallid_fasad.jpg';
import Tingvallavagen from '../../assets/images/Tingvallavagen.jpg';
import Vetters_1 from '../../assets/images/Vetters_1.jpg';
import Vetterslund_fasad from '../../assets/images/Vetterslund_fasad.jpg';

const imagePaths = [
  Annebodavagen25bild,
  Bokstodet_1,
  Bokstodet_4,
  Predikant_gjut_3,
  Borrsvangen_1,
  BrfOttars2,
  dn3,
  Tingvallavagen_fasad_1,
  loke_puff,
  Maln_pelare_Biet,
  Namndeman_2,
  Predikant_bilad_terrass,
  Ringgarden_4724,
  Sagvagen,
  Sorklippan,
  Stenbrottet_6690,
  Tallid_fasad,
  Tingvallavagen,
  Vetters_1,
  Vetterslund_fasad,
];

const Projects = () => {
  return (
    <div className='mb-5'>
      <div className='projects-top'>
        <h2>Projects</h2>
        <p>
          We do all types of concrete work. Among our projects you will find
          everything from bridges, quays, access ramps to garages, pillars,
          stairs and tunnels. Our flexible working method with efficient
          special solutions and modern machines is the basis for our successful
          projects.
        </p>
      </div>
      <Container className='project-sample'>
        {imagePaths.map((image, index) => (
          <Row key={index}>
            {imagePaths.slice(index * 4, (index + 1) * 4).map((image, i) => (
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

export default Projects;
