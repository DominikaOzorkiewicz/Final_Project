import React, {useEffect, useState} from "react";
import { Container, Button } from 'reactstrap';
import {Link} from "react-router-dom";
import {UserPanel} from "./UserPanel";

export const Home = ({ userLogged }) => {
    const [logged, setLogged] = useState(userLogged);

    useEffect(() => {
        console.log(`działa ${userLogged}`);
        setLogged(userLogged);
    });

    const homeStyle = {
        fontFamily: 'Cormorant',
        color: '#8D8585',
        fontWeight: '700',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0 auto',
        height: '100%',

    }

    const backgroundHomeStyle = {
        //backgroundImage: 'url("https://images.pexels.com/photos/909916/pexels-photo-909916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        //backgroundPosition: '-500px -70px',
        //backgroundPosition: 'center',
        //backgroundAttachment: 'fixed',
        //backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
        filter: 'blur(8px)'
    }

    const homeContentStyle = {
        //backgroundColor: 'rgba(58, 55, 55, 0.20)',
        border: '1px dotted gold',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        padding: '20px',
        zIndex: '2'
    }

    return (

        <div className='home' style={homeStyle}>

            { logged !== true ?
                <>
                    <div className='home-img' style={backgroundHomeStyle} />
                    <Container className='home__container container' style={{fontSize: 'xx-large'}}>

                        <Container className='home__content' style={ homeContentStyle }>
                            <h1 className='home__title' style={{fontSize: '3.125em', color: '#6D6D6D'}}>Hello</h1>
                            <p className='home__text' >Lorem ipsum dolor sit amet.</p>

                            <Button className='home__button' >Meet our animals!</Button>
                            <p>No account? Register <Link to='/register'>here</Link></p>
                        </Container>

                    </Container>
                </>

                : <UserPanel/> }

        </div>

    );

}