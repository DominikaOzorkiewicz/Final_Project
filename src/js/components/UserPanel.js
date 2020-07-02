import React, {useState} from 'react';
import {Container, Card, CardTitle, CardText, Row, Col} from "reactstrap";


export const UserPanel = ({ user }) => {
    const [loggedUser, setLoggedUser] = useState(user);


    return (
        <section className='userPanel'>
            <Container className="userPanel__container container" fluid='true' >

                <h3 className='userPanel__welcome' >Hello {loggedUser.name}</h3>

                <Card className='panel' style={{ marginBottom: '1rem' }} >

                    <CardTitle className='panel__title'>USER PANEL</CardTitle>

                    <Container className='pannel__content' fluid='true'>
                        <Row xs="12">
                            <Col>User details
                                <ul className='userDetails__list'>
                                    <li>Name: {loggedUser.name}</li>
                                    <li>E-mail: {loggedUser.email}</li>
                                </ul>
                            </Col>
                        </Row>


                        <Row xs="2">
                            <Col>
                                <CardText>Watchlist of pets:</CardText>
                                 { loggedUser.favoritePetsList !== undefined ?
                                    <ul>
                                        { loggedUser.favoritePetsList.map( (animal, index) => <li key={index}>Pet</li> ) }
                                    </ul>
                                    : <p>Empty :(</p> }

                            </Col>

                            <Col>
                                <CardText>My adopted pets:</CardText>
                                <p>No adopted pets yet</p>
                                {/* { adoptedPets.length > 0 ?
                                    <ul>
                                        { adoptedPets.map(adoptedPet => <li key={adoptedPet.id}>{adoptedPet.name}</li>) }
                                    </ul>
                                : <p>No adopted pet yet</p>} */}
                            </Col>
                        </Row>
                    </Container>

                </Card>

            </Container>
        </section>

    );
}