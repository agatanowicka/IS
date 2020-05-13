import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import { GiThermometerHot } from 'react-icons/gi';
import Container from 'react-bootstrap/Container';

export class Loader extends Component {
    render() {
        return (
            <Container fluid className='loader'>
            <VisibilitySensor>
                {({ isVisible }) => (
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: isVisible ? 1 : 0 }}
                        config={{ delay: 100, duration: 2000 }}
                    >
                        {props => (
                            <div style={props}
                                className='leftColHeading'>          
                                 <div className='loaderText'>
                                    <h2> <GiThermometerHot /> INTELIGENTNY SAD</h2>
                                    <h5>System czujnków temperatury</h5>
                                </div>
                            </div>
                        )}
                    </Spring>)}
            </VisibilitySensor>
            </Container>
        );
    }
}
export default Loader;