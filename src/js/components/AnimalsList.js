import React, {useEffect, useState} from 'react';
import {Container, FormGroup, Label, Input, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";
import Firebase from "firebase";

export const AnimalsList = ({animalType,animalList}) => {

    const [animalsList, setAnimalsList] = useState(animalList);



    return (
        <section className='animalsList'>
            <Container className='animalsList__container container' fluid='true' >

                <h3 className='animalsList__title'>{`${animalType}s`}</h3>

                <FormGroup>
                    <Label for="exampleSearch">Search shelter</Label>
                    <Input
                        type="search"
                        name="search"
                        id="shelterSearch"
                        placeholder="Wpisz schronisko"
                    />
                </FormGroup>

                <ListGroup className='animalsList__list' horizontal="lg">

                    { animalsList.map((animal, index) =>

                        animal.animalType === animalType &&
                        <ListGroupItem key={index} className='animalsList__list-el'>
                            <img src={animal.icon} className='animalsList__list-avatar' width='200px' height='200px' alt='Animal'/>
                            <Link to={`/card/${animal.id}`}>{animal.name}</Link>
                        </ListGroupItem>
                    )}

                </ListGroup>

            </Container>
        </section>

    );

}