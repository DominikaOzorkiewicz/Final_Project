import React from "react";
import { Container, Button } from 'reactstrap';
import {Link} from "react-router-dom";

export const Home = () => {

    const homeStyle = {
        fontFamily: 'Cormorant',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0 auto'
    }

    return (
        <div className='home' >
            <Container className='home__container container' fluid={true} style={homeStyle}>

                <h1 className='home__title'>Hello</h1>
                <p className='home__text' >Lorem ipsum dolor sit amet.</p>

                <Button className='home__button' >Meet our animals!</Button>
                <p>No account? Register <Link to='/register'>here</Link></p>

            </Container>
        </div>

    );

}