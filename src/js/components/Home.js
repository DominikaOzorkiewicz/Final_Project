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


    const handleTest = () => {
        let ref = Firebase.database().ref('Cats/');
        let allCats = [];
        ref.on('value', snapshot => {

            snapshot.forEach(snap => {
                allCats.push(snap.val());
            });
        });

        console.log(allCats);
    }

    return (

        <div className='home'>

            { logged !== true ?
                <>
                    <div className='home-img'/>
                    <Container className='home__container container' style={{fontSize: 'xx-large'}}>

                        <Container className='home__content' >
                            <h1 className='home__title' >Hello!</h1>
                            <p className='home__text' >Lorem ipsum dolor sit amet.</p>

                            <Button className='home__button' size="lg" tag={Link} to='/login' onClick={handleTest}>Meet our pets!</Button>
                            <p>No account? Register <Link to='/register'>here</Link></p>
                        </Container>

                    </Container>
                </>

                : <UserPanel/> }

        </div>

    );

}