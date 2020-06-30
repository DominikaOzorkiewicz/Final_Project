import React, {useEffect, useState} from 'react';
import Firebase from 'firebase';
import {Container, Card, CardHeader,CardBody, CardImg, CardTitle, CardText} from 'reactstrap';
import {useParams} from "react-router-dom";

const useSingleton = (initializer) => {
    React.useState(initializer)
}

export const AnimalSingleCard = ({ animalList }) => {
    let { animalID } = useParams();
    const [animal, setAnimal] = useState(animalList);
    const [pet, setPet] = useState('');

    //  nie działa i nie mam pojęcia dlaczego <<<-----------------------------------
    //const [pet, setPet] = useState(()=> {
    //         animalList.forEach( selectedPet => {
    //             if (animalID === selectedPet.id) {
    //                 console.log('mam!');
    //                 return selectedPet;
    //             }
    //         });
    //     });

    useSingleton(() => {
        animal.forEach( selectedPet => {
            if (animalID === selectedPet.id) {
                setPet(selectedPet);
            }
        });
    })

    return (
        <section className='singleCard' >
            <Container className='singleCard__container container' fluid='true' >
                <Card>

                    <CardHeader className='singleCard__header'>Shelter: {pet.location}</CardHeader>

                    <CardBody>
                        <CardImg className='singleCard__icon' variant="top" src={ pet.icon } width='200px' height='200px' alt='Animal'/>
                        <CardTitle className='singleCard__name' >Name: {pet.name}</CardTitle>
                        <CardText className='singleCard__description' >Description: {pet.description}</CardText>

                    </CardBody>

                </Card>
            </Container>
        </section>
    );
}