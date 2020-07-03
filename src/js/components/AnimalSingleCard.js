import React, {useEffect, useState} from 'react';
import Firebase from 'firebase';
import {Container, Card, CardHeader, CardBody, CardImg, CardTitle, CardText, Button, Row, Col} from 'reactstrap';
import {useParams, Link} from "react-router-dom";


export const AnimalSingleCard = ({ animalList, sheltersList, user }) => {
    let { animalID } = useParams();

    const [animal, setAnimal] = useState(() => {
        if (animalList === undefined || animalList.length === 0) {

            if (localStorage.getItem('Animals') !== null) {
                return JSON.parse(localStorage.getItem('Animals'));
            } else { return ''}

        } else {return animalList}
    });


    // Set animal based on animal id
    const [pet, setPet] = useState(() => {
             const selectedAnimal = animal.filter(animal => {
                 return animal.id === animalID;
             });
        return selectedAnimal.length <= 0 ? '' : selectedAnimal[0];
    });


    // Set shelter name based on animal location
    const [shelter, setShelter] = useState(() => {
        const selectedShelter = sheltersList.filter(shelter => {
            return pet.location === shelter.id;
        });
        return selectedShelter.length <= 0 ? '' : selectedShelter[0];
    });


    // Favorite list
    const [favoritePet, setFavoritePet] = useState([]);

    const handleAddToFavorite = (event) => {
        event.preventDefault();
        setFavoritePet(pet);
        if (user.favoritePetsList === undefined) {
            user.favoritePetsList = [];
        }

        // Prevent to add the same pet twice
        if ( !(user.favoritePetsList.includes(pet.id)) ) {
            user.favoritePetsList.push(pet.id);

        } else { user.favoritePetsList = user.favoritePetsList.filter(el => el !== pet.id) }

        let favoritePetsList = Firebase.database().ref('users/' + user.id).update({'favoritePetsList': user.favoritePetsList},
             function(error) {
                if (error) {
                    console.log('The write failed...');
                } else {
                    console.log('Data saved successfully!');
                }
            });
    }


    return (
        <section className='singleCard' >
            <Container className='singleCard__container container' fluid='true' >
                <Card>

                    <CardHeader className='singleCard__header'>Shelter: {shelter.name}</CardHeader>

                    <CardBody>
                        <CardImg className='singleCard__icon' variant="top" src={ pet.icon } width='200px' height='200px' alt='Animal'/>
                        <Row style={ {marginTop: '20px'} }>
                            <Col className="col-md-4">
                                <CardTitle className='singleCard__name'>Name: <span>{pet.name}</span></CardTitle>
                            </Col>

                            <Col className="col-md-4 offset-md-4">
                                <Button className='addFavoriteBtn' onClick={handleAddToFavorite}>
                                    <svg className="bi bi-heart" width="1em" height="1em" viewBox="0 0 16 16"
                                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>Add to favorite</Button>
                            </Col>
                        </Row>
                        <CardText className='singleCard__age' >Birth: {pet.birth}</CardText>
                        <CardText className='singleCard__description' >Description: {pet.description}</CardText>

                        <Button outline color="secondary" tag={Link} to='/contact'>Contact</Button>

                    </CardBody>

                </Card>
            </Container>
        </section>
    );
}