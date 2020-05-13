import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class AddThermometr extends Component {
    render() {
        return (
            <Card className='aplicationCards'>
                <Card.Body>
                    <Card.Header style={{ height:'100px' }}>
                        <Card.Title>Dodaj termometr</Card.Title>
                    </Card.Header>
                    <input style={{ marginTop: '20px', display:'block', marginRight:'auto', marginLeft:'auto'}}></input>
                    <Button className='addButton' variant="secondary">dodaj</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default AddThermometr