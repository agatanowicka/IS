import React, { Component, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import LeftCol from './LeftCol';

const items = [
    {
        src: "/images/groundFrost.jpg",
        altText: "Slide 5",
        caption: "w czasie przymrozków",
        className: 'groundFrostClass'
    },
    {
        src: "/images/spraying.jpg",
        altText: "Slide 3",
        caption: "w czasie oprysków",
        className: 'sprayingClass'
    },
    {
        src: "/images/coldRoom.jpg",
        altText: "Slide 2",
        caption: "w komorach chłodniczych",
        className: 'coldRoomClass'
    },
    {
        src: '/images/field.jpg',
        altText: "Slide 1",
        caption: "na polach uprawnych",
        className: 'fieldClass'
    },
    {
        src: "/images/anywhere.jpg",
        altText: "Slide 4",
        caption: "wszędzie tam gdzie temperatura jest istotna",
        className: 'anywhereClass'
    }
]

class PlaceOfUse extends Component {
    render() {
        return (
            <div className='pleceOfUseDiv' id='placeOfUse'>
                <Container fluid className='space'></Container>
                <Container fluid style={{ padding: '0px' }}>
                    <Row className='placeOfUseRow' style={{ margin: '0px' }}>
                        <Col md={12} lg={4} className='leftCol'>
                         <LeftCol />
                        </Col>
                        <Col md={12} lg={8} style={{ padding: '0px' }}>
                            <Carousel className='placeOfUseCarousel'>
                                {items.map(item => {
                                    return (
                                        <Carousel.Item>
                                            <img
                                                className=" w-100 "
                                                src={item.src}
                                                alt={item.altText}
                                                key={item.src}
                                                className='carouselImage'
                                            />
                                            <Carousel.Caption className={item.className}>
                                                <p className='placeOfUseCarCaption'>{item.caption}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>)
                                })
                                }
                            </Carousel>
                        </Col>
                    </Row>
                </Container>>
            </div>

        )
    }
}
export default PlaceOfUse