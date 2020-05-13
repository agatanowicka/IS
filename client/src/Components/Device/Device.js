import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSimCard } from 'react-icons/fa';
import { BsBatteryCharging } from 'react-icons/bs';
import { AiOutlineColumnWidth } from 'react-icons/ai';
import { DiHtml5DeviceAccess } from 'react-icons/di';
import { FaWeight } from 'react-icons/fa';
class Device extends Component {
    render() {
        return (
            <div className='deviceMainDiv' id='urzadzenie'>
                <h1 className='diviceHeading'>URZĄDZENIE</h1>
                <Container fluid className='deviceContainer'>
                    <Row>
                        <Col sm={6} md={6} lg={3} className='deviceItemCol'>
                            <div className='deviceItem'>
                                <FaSimCard className='deviceIcons' />
                                <h6 className='deviceTextItem1'>komunikacja poprzez kartę SIM</h6>
                            </div>
                        </Col>
                        <Col sm={6} md={6}  lg={3} className='deviceItemCol'>
                            <div className='deviceItem'>
                                <BsBatteryCharging className='deviceIcons' />
                                <div>
                                    <h4 className='deviceNum'>90</h4>
                                    <h6 className='deviceText'> dni pracy na jednym ładowaniu</h6>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6}  lg={3} className='deviceItemCol'>
                            <div className='deviceItem'>
                                <AiOutlineColumnWidth className='deviceIcons' />
                                <div>
                                    <h6 className='deviceText'>nieograniczony zasięg sensorów temperatury</h6>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6}  lg={3} className='deviceItemCol'>
                            <div className='deviceItem'>
                                <FaWeight className='deviceIcons' />
                                <div>
                                    <h4 className='deviceNum'>200</h4>
                                    <h6 className='deviceText'>g. max waga urządzenia</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Device