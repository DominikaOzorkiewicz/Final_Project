import React, {useState} from 'react';
import Firebase from 'firebase';
import {Container, Card, CardHeader,CardBody, CardImg, CardTitle, CardText} from 'reactstrap';
import {useParams} from "react-router-dom";

export const AnimalSingleCard = () => {
    let { animalID } = useParams();


    return (
        <section className='singleCard' >

            <Container className="singleCard-container container" fluid='true' >
                <Card>

                    <CardHeader>Shelter:{}</CardHeader>

                    <CardBody>
                        <CardImg variant="top" />
                        <CardTitle>Name: </CardTitle>
                        <CardText>Description:</CardText>

                    </CardBody>

                </Card>
            </Container>

        </section>
    );
}