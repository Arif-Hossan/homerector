import {  Container, Row } from 'react-bootstrap';
import './Contact.css';
import { useEffect, useState } from 'react';
import ContactPerson from '../ContactPerson/ContactPerson';

const Contact = () => {
    const [members,setMembers] = useState([]);
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=8')
        .then(res => res.json())
        .then(data => setMembers(data.results))
    },[])
    return (
        <div className='pt-5 pb-5 contact' id="contact">
            <h2>Contact</h2>
            <Container className='mt-5'>
                <Row>
                {
                    members.map((member,idx) => <ContactPerson key={idx} member={member}></ContactPerson>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
