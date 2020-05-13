import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class AboutSystem extends Component {
    render() {
        return (
            <div className='aboutSystem' id='info'>
                <div className='aboutSystemHeading'>
                    <h2 className='infoText'>SYSTEM INTELIGENTNY SAD TO W CAŁOŚCI POLSKI, PROSTY W OBSŁUDZE, W PEŁNI ZAUTOMATYZOWANY SYSTEM ZAPEWNIAJĄCY KOMPLEKSOWE ROZWIĄZANIE DLA MONITOROWANIA TEMPERATURY W OGRODZIE, SADZIE LUB NA POLACH UPRAWNYCH.</h2>
                </div>
                <Container style={{ marginTop: '50px', marginBottom: "50px" }}>
                    <Row>
                        <Col md={6} style={{ padding: '0px' }}>
                            <img src="/images/systemIlustration.jpg" style={{ width: '100%', height: '400px', borderColor: 'black', borderWidth: '2px', borderStyle: 'solid', marginLeft: 'auto', marginRight: 'auto' }} />
                        </Col>
                        <Col md={6} style={{ padding: '0px' }}>
                            <div class="aboutSystemContent">
                                <div className='aboutSystemText'>
                                    <h6> System składa się z 2 części: urządzeń oraz aplikacji.

                                    Każde urządenie posiada 2 termometry z których pomiary bezprzewodowo z pomocą karty sim przesyła na serwer.  Zastosowanie 2 termometrów w jednym urządzeniu pozwala na pomiar temperatury na różnych wysokościach, co jest bardzo istotne w przypadku przeciwdziałania przymrozkom.

                                Serwer udostępnia dane dla aplikacji i pozwala na komunikację z każdym z urządeń.
                                
                                Aplikacja została przygotowana tak, aby było można z niej korzystać na każdym smartfonie, tablecie czy komputerze.</h6 >
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default AboutSystem