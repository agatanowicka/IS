import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

class aplicationTabs extends Component {
    render() {
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                               <p>Aplikacja jest sercem systemu „Inteligentny Sad”. Pozwala na zarządzanie całym środowiskiem, jak również na wyświetlanie danych przychodzących ze wszystkich zdefiniowanych czujników. Wszystkie pomiary pokazywane w aplikacji są aktualizowane na bieżąco, zgodnie z danymi wysyłanymi przez podpięte sensory. Po włączeniu aplikacji definiujemy ogrody i przypisujemy do nich sensory temperatury. Z tego widoku jednym kliknięciem przejdziesz do wykresów. Aplikacja jest w całości polska: od języka interfejsu do miejsca wykonania aplikacji, jak i wsparcia technicznego.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                               
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}
export default aplicationTabs