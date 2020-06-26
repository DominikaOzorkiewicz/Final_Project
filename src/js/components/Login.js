import React, {useState} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link, useHistory} from "react-router-dom";

export const Login = ({eventlogUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        padding: '40px',
        fontFamily: 'Cormorant'
    }

    //log in method with validate
    const handleLogIn = (event) => {
        event.preventDefault();
        const newError = [];

        if (email.length < 3 && !email.includes('@')) { newError.push('Email incorrect')}
        //if (password.length === user.password ) { newError.push('Password incorrect')}
        setErrors(newError);
        console.log(newError);

        if (newError.length > 0 ) return false;

        fetch('http://localhost:3000/users')
            .then( resp => resp.json())
            .then(data => {
                data.forEach(function (user) {
                    if (user.email === email && user.password === password) {
                        eventlogUser(true);
                        history.push('/userpanel');
                    }

                })
                console.log(data);
            });
    }


    return (
        <>
            <section className='login__container container'>
                <Container className="login-container container" fluid='true' style={formStyle}>

                    { errors.length > 0 && <ul> {errors.map( (error, index) => <li key={index} >{error}</li>)} </ul> }

                    <Form onSubmit={handleLogIn} >
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type='email' name='email' value={email} placeholder='Email' onChange={event => setEmail(event.target.value)}/>
                        </FormGroup>

                        <FormGroup>
                            <Label>Password</Label>
                            <Input type='password' name='password' value={password} placeholder='Password' onChange={event => setPassword(event.target.value)}/>
                        </FormGroup>


                        <Button>Log in</Button>
                        <p>No account? Register <Link to='/register'>here</Link></p>
                    </Form>

                </Container>
            </section>
        </>
    );
}