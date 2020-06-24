import React, {useState} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';

export const Register = () => {
    const [user, setUser] = useState({
        name:'',
        email: '',
        password: '',
    });

    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState([]);

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
    }

    const handleChangeUserData = event => {
        const {name, value} = event.target;

        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    }

    //method for send full correct form
    const sendForm = () => {

        fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then( resp => resp.json())
            .then( data => setUser(data))
            .catch( err => console.log(err));

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newError = [];

        //check for any errors in input data
        if (user.name.length < 5) { newError.push('Name too short')}
        if (user.email.length < 3 && !user.email.includes('@')) { newError.push('Email incorrect')}
        if (user.password.length < 4 ) { newError.push('Password too short')}
        if (user.password !== password2 ) { newError.push('Passwords not match')}
        //add new errors to array
        setErrors(newError);

        if (newError.length > 0 ) return false;

        sendForm();
    }


    return (
        <section className='register'>
            <Container className="register-container container" fluid={true}>

                { errors.length > 0 && <ul> {errors.map( (error, index) => <li key={index} >{error}</li>)} </ul> }

                <Form style={formStyle} onSubmit={handleSubmit}>
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
                        <Label>Email</Label>
                        <Input type='password' name='password2' value={password2} placeholder='Repeat password' onChange={event => setPassword2(event.target.value)} />
                    </FormGroup>

                    <Button>Register</Button>
                </Form>

            </Container>
        </section>
    );
}