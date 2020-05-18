import React, { Component,useState } from 'react';
import Thermometr1 from './Thermometr1';
import Thermometr2 from './Thermometr2';
import AddThermometr from './AddThermometr';
import ComeBackToViewsOrchards from './ComeBackToViewsOrchards';
import Carousel from 'react-bootstrap/Carousel';
class CarouselCards extends Component {
    render() {
        return (
            <Carousel >
                <Carousel.Item>
                    <Thermometr1 />
                </Carousel.Item>
                <Carousel.Item>
                    <Thermometr2 />
                </Carousel.Item>
                <Carousel.Item>
                    <ComeBackToViewsOrchards />
                </Carousel.Item>
                <Carousel.Item>
                    <AddThermometr />
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default CarouselCards