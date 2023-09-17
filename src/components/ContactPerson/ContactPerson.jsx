import { Col,  Image} from "react-bootstrap";
import './ContactPerson.css';

const ContactPerson = (props) => {

    const { name, email, phone, picture } = props.member;
    return (
        <Col className="contact-person">
            <Image src={picture.large} fluid roundedCircle alt="contact person image" />
            <h5>{name.first} {name.last}</h5>
            <p>{email}</p>
            <p>0{phone}</p>
        </Col>
    );
};

export default ContactPerson;