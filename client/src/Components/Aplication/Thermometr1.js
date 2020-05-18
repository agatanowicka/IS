import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
class Thermometr1 extends Component {
    render() {
        return (
            <Card className='aplicationCards'>
                <Card.Body>
                    <Card.Header style={{ height:'100px' }}>
                        <Card.Title>termometr 1</Card.Title>
                        <Button variant="secondary">Edytuj</Button>
                    </Card.Header>
                </Card.Body>
                <ListGroup className="list-group-flush cardsText" >
                    <ListGroupItem>bateria: 23%</ListGroupItem>
                    <ListGroupItem>temperatura dolna: 0,78 °C</ListGroupItem>
                    <ListGroupItem>temperatura górna: 0,23 °C</ListGroupItem>
                    <ListGroupItem>częstotliwość danych: 60 s</ListGroupItem>
                </ListGroup>
                <Card.Body className='cardsButton'>
                    <Button variant="primary">Pokaż temperatury ostrzegania</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default Thermometr1