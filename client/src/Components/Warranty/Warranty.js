import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export class Warranty extends Component {
    render() {
        return (
            <div className='warranty'id='gwarancja'>
                <div className='warrantyContent'>
                <Container fluid className='warrantyContainer' style={{marginLeft:'0px',marginRight:'0px'}}>
                    <Row>
                        <Col sm={12} md={6} lg={6} style={{padding:'0px'}}>
                            <img className='warrantyImage' src='/images/warranty.jpg'></img>
                        </Col>
                        <Col sm={12} md={6} lg={6}className='warrantyRightCol'>
                            <h1 className="warrantyHeading">GWARANCJA</h1>
                            <div className='warrantyPar'>
                                <p>Gwarancja na produkt obejmuje okres 24 miesięcy.</p>
                                <p> Oferowany jest również serwis pogwarancyjny.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        )
    }
}
export default Warranty;