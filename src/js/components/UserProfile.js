import React, {useState} from 'react';
import {Container, Card, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";


export const UserProfile = ({ user, animalList }) => {
    const [loggedUser, setLoggedUser] = useState(user);

    const [animals, setAnimals] = useState(() => {
        if (animalList === undefined || animalList.length === 0) {
            if (localStorage.getItem('Animals') !== null) {
                return JSON.parse(localStorage.getItem('Animals'));
            } else {
                return '';
            }
        } else {
            return animalList;
        }
    });


    return (
        <section className='userProfile'>
            <Container className="userProfile__container container" fluid='true'>

                <Card className='profile' style={{ marginBottom: '1rem' }}>
                    <CardTitle className='profile__title'>
                        <h5 className='userProfile__welcome'>
                            Hello {loggedUser.name}
                        </h5>
                    </CardTitle>

                    <Container className='profile__content' fluid='true'>
                        <Row>
                            <Col className='favoriteList'>
                                <CardText>
                                    Watchlist of pets:
                                </CardText>

                                 { loggedUser.favoritePetsList !== undefined ? (
                                    <ListGroup className='favoriteList__list'>
                                        { animals.filter(animal => {
                                            return loggedUser.favoritePetsList.includes(animal.id)
                                        }).map((animal, index) =>
                                         <ListGroupItem
                                             key={index}
                                             className='favoriteList__list-el'
                                         >
                                                <Link to={`/card/${animal.id}`}>
                                                    <img
                                                        src={animal.icon}
                                                        className='favoriteList__list-avatar rounded'
                                                        width='100px'
                                                        height='100px'
                                                        alt='Animal'
                                                    />
                                                </Link>
                                             <Link
                                                 className="favoriteList__list-name"
                                                 to={`/card/${animal.id}`}
                                             >
                                                 {animal.name}
                                             </Link>
                                            </ListGroupItem>
                                        )}
                                    </ListGroup>
                                     ) : (
                                         <p>Empty :(</p>
                                 )}
                            </Col>
                            {/*} <Col className='adoptedList'>
                                <CardText>
                                My adopted pets:
                                </CardText>
                                <p>No adopted pets yet</p>
                                {/* { loggedUser.adoptedList !== undefined ? (
                                    <ListGroup>
                                        { adoptedPets.map(adoptedPet =>
                                        <Card key={adoptedPet.id}>
                                        {adoptedPet.name}
                                        </Card> )}
                                    </ListGroup>
                                ) : (
                                <p>No adopted pet yet</p>
                                )}
                            </Col> */}
                        </Row>
                    </Container>

                </Card>

            </Container>
        </section>
    );
}