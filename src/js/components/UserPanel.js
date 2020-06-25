import React from 'react';
import {Container, Card, CardTitle, CardText, Row, Col} from "reactstrap";
import {users} from '../../../users.json'

export const UserPanel = () => {
    console.log(users);


    return (
        <section className='userPanel'>
            <Container className="userPanel__container container" fluid='true' >

                <h3 className='userPanel__welcome' >Hello {users.name}</h3>

                <Card className='panel' style={{ marginBottom: '1rem' }} >

                    <CardTitle className='panel__title'>USER PANEL</CardTitle>

                    <Container className='pannel__content' fluid='true'>
                        <Row xs="12">
                            <Col>User details
                                <ul className='userDetails__list'>
                                    <li>Name: {users.name}</li>
                                    <li>E-mail: {users.email}</li>
                                </ul>
                            </Col>
                        </Row>


                        <Row xs="2">
                            <Col>
                                <CardText>Watchlist of pets:</CardText>
                                {/* { watchlist.length > 0 ?
                                    <ul>
                                        { watchlist.map(pet => <li key={animal.id}>{animal.name}</li> ) }
                                    </ul>
                                    : <p>Empty :(</p> } */}

                            </Col>

                            <Col>
                                <CardText>My adopted pets:</CardText>
                                {/* { adoptedPets.length > 0 ?
                                    <ul>
                                        { adoptedPets.map(pet => <li key={adopted.id}>{adopted.name}</li>) }
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