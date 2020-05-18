import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export class Delivery extends Component {
    render() {
        return (
            <div className='delivery' id='dostawa'>
                <Container>
                    <Row>
                        <Col className='deliveryLeftCol'sm={12} md={6}>
                            <h1 className="deliveryHeading">DOSTAWA</h1>
                            <div className='deliveryPar'>
                                <p>Produkt dostarczany jest przez firmę kurierską.</p>
                                <p> Montaż urządzenia nie jest potrzebny. Wystarczy podłączyć baterię, aby już po chwili urządzenie zaczęło wysyłać temperaturę na serwer. Pozwala to na natychmiastową aktywację systemu.</p>
                            </div>
                        </Col>
                        <Col style={{ padding: '0px'}} sm={12} md={6}><img className='deliveryImage' src='/images/delivery.jpg'></img></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Delivery;