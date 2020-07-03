import React, {useState} from 'react';
import {Button, Container, Form, FormGroup, Input, Label, Col, FormText, NavLink} from 'reactstrap';
import {Link, useHistory} from "react-router-dom";
import Firebase from 'firebase';

export const Register = () => {
    const [user, setUser] = useState({
        name:'',
        email: '',
        password: '',
        id: '',
        favoritePetsList: [],
    });

    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const formStyle = {
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        padding: '40px',
        fontFamily: 'Cormorant'
    }

    const handleChangeUserData = event => {
        const {name, value} = event.target;

        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newError = [];

        //check for any errors in input data
        if (user.name.length < 2) { newError.push('Name too short')}
        if (user.email.length < 3 && !user.email.includes('@')) { newError.push('Email incorrect')}
        if (user.password.length < 4 ) { newError.push('Password too short')}
        if (user.password !== password2 ) { newError.push('Passwords not match')}
        //add new errors to array
        setErrors(newError);

        if (newError.length > 0 ) return false;

        //set user ID
        user.id = Math.random().toString(36).substr(2, 9);

        Firebase.database().ref('users/' + user.id).set(user);
        console.log('DATA SAVED');

        history.push('/login');
    }


    return (
        <section className='register'>
            <Container className="register-container container" fluid='true' style={formStyle} >

                <h3 style={{textAlign: 'center', margin: '20px', fontSize: '1.875em'}}>Register</h3>

                { errors.length > 0 && <ul> {errors.map( (error, index) => <li key={index} >{error}</li>)} </ul> }

                <Form  onSubmit={handleSubmit} style={ {minWidth: '300px'} } >
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type='text' name='name' value={user.name} placeholder='Type your name' onChange={handleChangeUserData} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Email</Label>
                        <Input type='email' name='email' value={user.email} placeholder='Type your email' onChange={handleChangeUserData} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Password</Label>
                        <Input type='password' name='password' value={user.password} placeholder='Password' onChange={handleChangeUserData} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Repeat password</Label>
                        <Input type='password' name='password2' value={password2} placeholder='Repeat password' onChange={event => setPassword2(event.target.value)} />
                    </FormGroup>

                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label col-sm-12">Have you ever adopted an animal from a shelter?</legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio-yes" value={'yes'} />
                                    Yes
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio-no" value={'no'} />
                                    No
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <FormGroup check>
                        <FormText color="muted">
                            This is some terms and conditions to read, understand and accept by check the checkbox below.
                        </FormText>
                        <Input type="checkbox" name="check" id="exampleCheck" />
                        <Label for="exampleCheck" check>I accept the terms and conditions</Label>
                    </FormGroup>

                    <Button>Register</Button>
                </Form>

            </Container>
        </section>
    );
}