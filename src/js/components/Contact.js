import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const Contact = () => {

    return (
        <section className='contact'>
            <Container className="contact-container container" fluid={true}>

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