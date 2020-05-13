import React, { Component, useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Thermometr1 from './Thermometr1';
import Thermometr2 from './Thermometr2';
import AddThermometr from './AddThermometr';
import ComeBackToViewsOrchards from './ComeBackToViewsOrchards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav';
class Aplication extends Component {
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
                <Container fluid className='aplication-Cards'>
                    <Row md={4}>
                        <Col xs={6} md={6} lg={3} className='aplicationCardsCol'> <Card ><Thermometr1 /></Card></Col>
                        <Col xs={6} md={6} lg={3} className='aplicationCardsCol'><Card><Thermometr2 /></Card></Col>
                        <Col xs={6} md={6} lg={3} className='aplicationCardsCol'><Card><ComeBackToViewsOrchards /></Card></Col>
                        <Col xs={6} md={6} lg={3} className='aplicationCardsCol'><Card><AddThermometr /></Card></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Aplication

function Card({ children }) {
    const ref = useRef();
    const [isHovered, setHovered] = useState(false);

    const [animatedProps, setAnimatedProps] = useSpring(() => {
        return {
            xys: [0, 0, 1],
            config: { mass: 10, tension: 150, friction: 200, precision: 0.00001 }
        };
    });

    return (
        <animated.div
            ref={ref}
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseMove={({ clientX, clientY }) => {
                const x =
                    clientX -
                    (ref.current.offsetLeft -
                        (window.scrollX || window.pageXOffset || document.body.scrollLeft));
                const y =
                    clientY -
                    (ref.current.offsetTop -
                        (window.scrollY || window.pageYOffset || document.body.scrollTop));

                const dampen = 200;
                const xys = [
                    -(y - ref.current.clientHeight / 2) / dampen,
                    (x - ref.current.clientWidth / 2) / dampen,
                    1.03
                ];

                setAnimatedProps({ xys: xys });
            }}
            onMouseLeave={() => {
                setHovered(false);
                setAnimatedProps({ xys: [0, 0, 1] });
            }}
            style={{
                zIndex: isHovered ? 2 : 1,
                transform: animatedProps.xys.interpolate(
                    (x, y, s) =>
                        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
                )
            }}
        >
            {children}
        </animated.div>
    );
}