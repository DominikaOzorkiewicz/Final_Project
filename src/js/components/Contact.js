import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const Contact = () => {


    return (
        <section className='contact'>
            <Container className="contact__container container" fluid='true'>

                <h3 className='contact__title'>Stay in touch!</h3>

            <Form className='contact__form'>

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