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

            <Container className='home__container container' >

                    <h1 className='home__title'>Hello!</h1>

                    {logged === true ?
                        <>
                            <p className='home__text' >I'm looking for</p>
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
                            <p className='home__text' >Please login to search for your new animal friend.</p>
                            <Button className='home__button' size="lg" tag={Link} to='/login'>Log in</Button>
                            <p className='home__text-register'>No account? Register <Link to='/register' style={ {color: 'red', textDecoration: 'underline'} }>here!</Link></p>
                        </>
                    }

            </Container>

        </div>
    );

}