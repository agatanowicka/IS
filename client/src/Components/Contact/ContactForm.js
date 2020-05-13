import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: ''
        }
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        debugger;
        const email = this.state.email;
        const message = this.state.message;
        axios({
            method: "POST",
            url: "/api/form",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                email,
                message
            }
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Wiadomość została wysłana.");
                this.resetForm()
            }
        }).catch((err) => {
            alert('Nie udało się wysłać wiadomości. Prosimy o kontakt telefoniczny.')
        })
    }
    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }
    render() {
        return (
            <Form
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
            >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className='formLabel'>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={this.state.email}
                        onChange={this.onEmailChange.bind(this)}
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='formLabel'>Wiadomość</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="3" value={this.state.message}
                        onChange={this.onMessageChange.bind(this)}
                    />
                </Form.Group>
                <div className='formButton'>
                    <Button className='sendButton' variant="primary" type="submit" >
                        Wyślij
                </Button>
                </div>
            </Form>
        )
    }
}
export default ContactForm

