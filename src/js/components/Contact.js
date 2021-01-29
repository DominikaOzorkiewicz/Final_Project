import React, {useState} from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const Contact = ({ sheltersList }) => {
    const [shelterEmail, setShelterEmail] = useState('');

    const handleSetEmail = (event) => {
        event.preventDefault();
        setShelterEmail(event.target.value);
    }

    // place for send-email-message-to-shelter method
    const sendEmailToShelter = (event) => {
        event.preventDefault();
    }


    return (
        <section className='contact'>
            <Container className="contact__container container" fluid='true'>

                <h3 className='contact__title'>
                    Stay in touch!
                </h3>

            <Form className='contact__form' onSubmit={sendEmailToShelter}>

                <FormGroup>
                    <Label>Name</Label>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Type your name'
                        require
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        type='email'
                        name='email'
                        placeholder='Type your email'
                        require
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleText">
                        Your message
                    </Label>
                    <Input
                        type="textarea"
                        name="email-text"
                        id="email-text"
                        require
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleSelect">
                        Choose shelter
                    </Label>
                    <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                        onChange={event => handleSetEmail(event)}
                        require
                    >
                        { sheltersList.map(shelter =>
                            <option value={shelter.email} key={shelter.id}>
                                {shelter.name}
                            </option>
                        )}
                    </Input>
                </FormGroup>

                <Button>Send</Button>

            </Form>

            </Container>
        </section>
    );
}