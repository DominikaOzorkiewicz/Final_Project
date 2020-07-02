import React, {useState} from 'react';
import {Container, Card, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";


export const UserPanel = ({ user, animalList }) => {
    const [loggedUser, setLoggedUser] = useState(user);
    const [animals, setAnimals] = useState(animalList);

    console.log(loggedUser.favoritePetsList);


    return (
        <section className='userPanel'>
            <Container className="userPanel__container container" fluid='true' >

                <h3 className='userPanel__welcome' >Hello {loggedUser.name}</h3>

                <Card className='panel' style={{ marginBottom: '1rem' }} >

                    <CardTitle className='panel__title'>USER PANEL</CardTitle>

                    <Container className='panel__content' fluid='true'>
                        <Row xs="12">
                            <Col>User details
                                <ul className='userDetails__list'>
                                    <li className='userDetails__list-el' >Name: {loggedUser.name}</li>
                                    <li className='userDetails__list-el' >E-mail: {loggedUser.email}</li>
                                </ul>
                            </Col>
                        </Row>


                        <Row >
                            <Col className='favoriteList'>
                                <CardText>Watchlist of pets:</CardText>
                                 { loggedUser.favoritePetsList !== undefined ?
                                    <ListGroup className='favoriteList__list'>
                                        { animals.filter(animal => {
                                            return loggedUser.favoritePetsList.includes(animal.id)
                                        }).map((animal, index) =>
                                         <ListGroupItem key={index} className='favoriteList__list-el'>
                                                <Link  to={`/card/${animal.id}`}><img src={animal.icon} className='favoriteList__list-avatar rounded' width='100px' height='100px' alt='Animal'/></Link>
                                                <Link className="favoriteList__list-name" to={`/card/${animal.id}`}>{animal.name}</Link>
                                            </ListGroupItem>
                                        )}
                                    </ListGroup>
                                    : <p>Empty :(</p> }

                            </Col>

                            {/*} <Col className='adoptedList'>
                                <CardText>My adopted pets:</CardText>
                                <p>No adopted pets yet</p>
                                {/* { loggedUser.adoptedList !== undefined ?
                                    <ListGroup>
                                        { adoptedPets.map(adoptedPet => <Card key={adoptedPet.id}>{adoptedPet.name}</Card>) }
                                    </ListGroup>
                                : <p>No adopted pet yet</p>}
                            </Col> */}
                        </Row>
                    </Container>

                </Card>

            </Container>
        </section>

    );
}