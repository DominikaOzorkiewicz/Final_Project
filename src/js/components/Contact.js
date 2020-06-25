import React from 'react';
import { Container, Form, FormGroup, FormText, Label, Input, Button } from 'reactstrap';

export const Contact = () => {


    const contactStyle = {
        width: '50%',
        padding: '40px',
        fontFamily: 'Cormorant',
    }

    return (
        <section className='contact' >
            <Container className="contact-container container" fluid='true' style={contactStyle} >

                <h3 style={{textAlign: 'center', margin: '20px', fontSize: '1.875em'}}>Stay in touch!</h3>

            <Form>

                <FormGroup>
                    <Label>Name</Label>
                    <Input type='text' name='name' placeholder='Type your name'/>
                </FormGroup>

                <FormGroup>
                    <Label>Email</Label>
                    <Input type='email' name='email' placeholder='Type your email'/>
                </FormGroup>

                <Button>Submit</Button>

            </Form>

            </Container>
        </section>
    );
}