import React, { Component, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav';
import CarouselCards from './CarouselCards';
import AllCards from './AllCards';
class Aplication extends Component {
    constructor(props) {
        super(props);
        const width= window.innerWidth
        this.state = {
            width
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({width:window.innerWidth});
    }
    render() {
        return (
                <div className='aplication' id='aplikacja'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" className='tabs'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item  >
                                    <Nav.Link eventKey="first"  className='tabsLink'>O aplikacji</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className='tabsLink'>Widok ogólny</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" className='tabsLink'>Widok szczegółowy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" className='tabsLink'>Wykresy</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <p className='tabsContent'>Aplikacja jest sercem systemu „Inteligentny Sad”. Pozwala na zarządzanie całym środowiskiem, jak również na wyświetlanie danych przychodzących ze wszystkich zdefiniowanych czujników. Wszystkie pomiary pokazywane w aplikacji są aktualizowane na bieżąco, zgodnie z danymi wysyłanymi przez podpięte sensory. Po włączeniu aplikacji definiujemy sady i przypisujemy do nich sensory temperatury. Z tego widoku jednym kliknięciem przejdziesz do wykresów. Aplikacja jest w całości polska: od języka interfejsu do miejsca wykonania aplikacji, jak i wsparcia technicznego.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p className='tabsContent'>Widok ogólny jest miejscem zaprojektowanym tak, aby w jak najprostszy sposób pokazać na jednym ekranie wszystkie najistotniejsze informacje. Służący do obserwacji oraz sprawdzania najwyższych jak i najniższych temperatur we wszystkich zdefiniowanych ogrodach. Z widoku ogólnego jednym kliknięciem przechodzimy do widoku szczegółowego.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p className='tabsContent'>W widoku szczegółowym można zobaczyć dokładne informacje dotyczące pomiarów z każdego sensora dodanego do sadu. Pozwala on również na kontrolowanie stanu baterii każdego czujnika. Znajdziesz tam również ustawienia urządzenia, takie jak alarmy lub częstotliwość wysyłania danych.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <p className='tabsContent'>Widok wykresu pozwala na wyświetlanie danych w formie wykresu. Pozwala to, w wygodny sposób, pokazywać dane dotyczące pomiarów.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            {this.state.width>576?<AllCards />:<CarouselCards />}
            </div>
        )
    }
}
export default Aplication

