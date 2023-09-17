import Carousel from 'react-bootstrap/Carousel';
import handshack from '../../assets/images/handshack.jpg';
import caterpiller from '../../assets/images/caterpiller.jpg';
import helmet from '../../assets/images/helmet.jpg';
import './HeaderCarousel.css';

function HeaderCarousel() {
  return (
    <>
    <Carousel data-bs-theme="dark">
        
        <Carousel.Item>
          <img
            className="d-inline-block w-100 slider-img"
            src={handshack}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-inline-block w-100 slider-img"
            src={caterpiller}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-inline-block w-100 slider-img"
            src={helmet}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HeaderCarousel;