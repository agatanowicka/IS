import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
class Thermometr2 extends Component {
    render() {
        return (
            <Card className='aplicationCards'>
                <Card.Body>
                    <Card.Header style={{ height:'100px' }}>
                        <Card.Title>termometr 2</Card.Title>
                        <Button variant="secondary">Edytuj</Button>
                    </Card.Header>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>bateria: 89%</ListGroupItem>
                    <ListGroupItem>temperatura dolna: -0,53 °C</ListGroupItem>
                    <ListGroupItem>temperatura górna: -0,18 °C</ListGroupItem>
                    <ListGroupItem>częstotliwość danych: 10 m</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary">Pokaż temperatury ostrzegania</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default Thermometr2