import React, {useEffect, useState} from "react";
import {Container, Button, NavLink} from 'reactstrap';
import {Link} from "react-router-dom";
import {UserPanel} from "./UserPanel";
import Firebase from 'firebase';

export const Home = ({ userLogged }) => {
    const [logged, setLogged] = useState(userLogged);

    useEffect(() => {
        console.log(`działa ${userLogged}`);
        setLogged(userLogged);
    });


    return (
        <div className='home'>

            <div className='home-img'/>
            <Container className='home__container container' >

                <Container className='home__content' >
                    <h1 className='home__title' >Hello!</h1>

                    {logged === true ?
                        <>
                            <p className='home__text' >Meet our pets!</p>
                            <div className='home__buttons'>
                                <Link className='home__link' to='/dogList'>
                                    <img className='home__icon' src="https://img.icons8.com/ios/50/000000/hachiko.png" alt='Dog icon'/>
                                    <p>Dogs</p>
                                </Link>

                                <Link className='home__link' to='/catList'>
                                    <img className='home__icon' src="https://img.icons8.com/ios/50/000000/pet-commands-follow.png" alt='Cat icon'/>
                                    <p>Cats</p>
                                </Link>
                            </div>
                            <Button tag={Link} to='/userpanel'>My account</Button>
                        </>
                        :
                        <>
                            <p className='home__text' >Lorem ipsum dolor sit amet.</p>
                            <Button className='home__button' size="lg" tag={Link} to='/login'>Log in</Button>
                            <p>No account? Register <Link to='/register'>here</Link></p>
                        </>
                    }

                </Container>

            </Container>

        </div>
    );

}