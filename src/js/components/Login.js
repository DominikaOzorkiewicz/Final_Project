import React, {useState} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link, useHistory} from "react-router-dom";
import Firebase from 'firebase';

export const Login = ({eventlogUser, eventCurrentUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();


    //log in method with validate
    const handleLogIn = (event) => {
        event.preventDefault();
        const newError = [];

        if (email.length < 3 && !email.includes('@')) { newError.push('Email incorrect')}
        setErrors(newError);
        console.log(newError);

        if (newError.length > 0 ) return false;

        let userFound = false;
        let currentUser = '';
        let ref = Firebase.database().ref('users/');
        let allUsers = [];
        ref.once('value', snapshot => {

            snapshot.forEach(snap => {
                allUsers.push(snap.val());
            });

            allUsers.forEach(databaseUser => {
                if (databaseUser.email === email && databaseUser.password === password) {
                    userFound = true;
                    currentUser = databaseUser;
                } else {console.log('user not found')}
            });

            if (userFound === true) {
                eventlogUser(true);
                eventCurrentUser(currentUser);
                history.push('/');

            } else {
                newError.push('Email or password incorrect');
                setErrors(newError);
            }
        });

        console.log(allUsers);
    }


    return (
        <section className='login'>
            <Container className="login__container container" fluid='true' >

                <h3 style={{textAlign: 'center', margin: '20px', fontSize: '1.875em'}}>Log in</h3>

                { errors.length > 0 && <ul> {errors.map( (error, index) => <li key={index} >{error}</li>)} </ul> }

                <Form onSubmit={handleLogIn}  style={ {minWidth: '300px'} }>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type='email' name='email' value={email} placeholder='Email' onChange={event => setEmail(event.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Password</Label>
                        <Input type='password' name='password' value={password} placeholder='Password' onChange={event => setPassword(event.target.value)}/>
                    </FormGroup>


                    <Button>Log in</Button>
                    <p>No account? Register <Link to='/register' style={ {color: 'red', textDecoration: 'underline'} } >here</Link></p>
                </Form>

            </Container>
        </section>
    );
}