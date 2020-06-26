import React, {useState} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link, useHistory} from "react-router-dom";
import Firebase from 'firebase';

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
        setErrors(newError);
        console.log(newError);

        if (newError.length > 0 ) return false;


        //CHANGE TO FIREBASE!
        let userFound = false;

        let ref = Firebase.database().ref('users/');
        let allUsers = [];
        ref.on('value', snapshot => {

            snapshot.forEach(snap => {
                allUsers.push(snap.val());
            });

            allUsers.forEach(databaseUser => {
                if (databaseUser.email === email && databaseUser.password === password) {
                    userFound = true;
                    console.log("znaleziony");
                } else {console.log('nieznaleziony')}
            });

            if (userFound === true) {
                eventlogUser(true);
                history.push('/userpanel');

            } else {
                newError.push('Email or password incorrect');
                setErrors(newError);
            }

        });

        console.log(allUsers);

        /* fetch('http://localhost:3000/users')
            .then( resp => resp.json())
            .then(data => {
                data.forEach(function (user) {
                    if (user.email === email && user.password === password) {
                        userFound = true;
                    }

                })
                console.log(data);
            }); */

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