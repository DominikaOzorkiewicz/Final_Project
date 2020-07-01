import React, {useEffect, useState} from 'react';
import Firebase from 'firebase';
import {Container, Card, CardHeader,CardBody, CardImg, CardTitle, CardText} from 'reactstrap';
import {useParams} from "react-router-dom";


export const AnimalSingleCard = ({ animalList }) => {
    let { animalID } = useParams();
    const [animal, setAnimal] = useState(animalList);

    const [pet, setPet] = useState(() => {
             const selectedAnimal = animalList.filter(animal => {
                 return animal.id === animalID;
             });
        return selectedAnimal.length <= 0 ? '' : selectedAnimal[0];
    })


    return (
        <section className='singleCard' >
            <Container className='singleCard__container container' fluid='true' >
                <Card>

                    <CardHeader className='singleCard__header'>Shelter: {pet.location}</CardHeader>

                    <CardBody>
                        <CardImg className='singleCard__icon' variant="top" src={ pet.icon } width='200px' height='200px' alt='Animal'/>
                        <CardTitle className='singleCard__name' >Name: {pet.name}</CardTitle>
                        <CardText className='singleCard__age' >Birth: {pet.birth}</CardText>
                        <CardText className='singleCard__description' >Description: {pet.description}</CardText>

                    </CardBody>

                </Card>
            </Container>
        </section>
    );
}