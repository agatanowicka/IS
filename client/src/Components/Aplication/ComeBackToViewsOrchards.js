import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
class ComeBackToViewsOrchards extends Component {
    render() {
        return (
            <Card className='aplicationCards'>
                <Card.Body>
                    <Card.Header style={{ height:'100px' }}>
                        <Card.Title>Sad północny</Card.Title>
                        <Button variant="secondary">Edytuj</Button>
                    </Card.Header>

                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>najniższy poziom baterii: 23%</ListGroupItem>
                    <ListGroupItem>najniższa temperatura: -0,53 °C</ListGroupItem>
                    <ListGroupItem>najwyższa temperatura: 0,78 °C</ListGroupItem>
                    <ListGroupItem>numer awaryjny: 123123123</ListGroupItem>
                    <ListGroupItem>Zauważone problemy: Brak</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary">Pokaż widok termometrów</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default ComeBackToViewsOrchards