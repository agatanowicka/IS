import React, { Component, useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Thermometr1 from './Thermometr1';
import Thermometr2 from './Thermometr2';
import AddThermometr from './AddThermometr';
import ComeBackToViewsOrchards from './ComeBackToViewsOrchards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AllCards extends Component {
    render(){
    return(
<div>
<Container fluid className='aplication-Cards'>
                  <Row md={4}>
                       <Col xxs={12} xs={6} s={6} md={6} lg={3} className='aplicationCardsCol'> <Card ><Thermometr1 /></Card></Col>
                       <Col xxs={12} xs={6} s={6} md={6} lg={3} className='aplicationCardsCol'><Card><Thermometr2 /></Card></Col>
                       <Col xxs={12} xs={6} s={6} md={6} lg={3} className='aplicationCardsCol'><Card><ComeBackToViewsOrchards /></Card></Col>
                       <Col xxs={12} xs={6} s={6} md={6} lg={3} className='aplicationCardsCol'><Card><AddThermometr /></Card></Col>
                   </Row>
               </Container>
</div>
    )
}}
export default AllCards

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