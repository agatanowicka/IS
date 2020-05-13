import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';

class Contact extends Component {
    render() {
        return (
            <div className='contact'id='kontakt'>
                <h1 className='contactHeading'>KONTAKT</h1>
                <Container>
                    <Row>
                        <Col md={6} >
                            <div className='contactPhone'>
                                <MdLocalPhone className='phoneIcon' />
                                <p className='phoneNumber'>793-283-928 </p>
                            </div>
                            <ContactForm />
                        </Col>
                        <Col md={6} >
                            <div className='mapsImage'>
                                <img className='mapsImage' src='/images/maps.PNG' height='350px'></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Contact