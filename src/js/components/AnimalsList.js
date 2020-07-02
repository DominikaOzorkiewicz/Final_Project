import React, {useEffect, useState} from 'react';
import {Container, FormGroup, Label, Input, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

export const AnimalsList = ({animalType,animalList, sheltersList}) => {

    const [animalsList, setAnimalsList] = useState(() => {
        if (animalList === undefined || animalList.length === 0) {

            if (localStorage.getItem('Animals') !== null) {
                return JSON.parse(localStorage.getItem('Animals'));
            } else { return ''}

        } else {return animalList}
    });

    const [shelterID, setShelterID] = useState('');

    const handleChangeShelter = (event) => {
        event.preventDefault();
        setShelterID(event.target.value);
    }



    return (
        <section className='animalsList'>
            <Container className='animalsList__container container' fluid='true' >

                <h3 className='animalsList__title'>{`${animalType}s`}</h3>

                <FormGroup>
                    <Label for="exampleSelect">Choose shelter</Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={event => handleChangeShelter(event)}>
                        <option value={''}>All</option>
                        { sheltersList.map(shelter => <option value={shelter.id} key={shelter.id}>{shelter.name}</option>) }
                    </Input>
                </FormGroup>

                <ListGroup className='animalsList__list' horizontal="lg">

                    {/* filter animals list based on matching location and shelter.id */}
                    { shelterID !== '' ? (
                        animalsList.filter(animal => {
                            return animal.location === shelterID

                        }).map((animal, index) =>
                            animal.animalType === animalType &&

                            <ListGroupItem key={index} className='animalsList__list-el'>
                                <Link  to={`/card/${animal.id}`}><img src={animal.icon} className='animalsList__list-avatar rounded' width='200px' height='200px' alt='Animal'/></Link>
                                <Link className="h6" to={`/card/${animal.id}`}>{animal.name}</Link>
                            </ListGroupItem>
                        )

                    ) : (
                         animalsList.map((animal, index) =>
                             animal.animalType === animalType &&
                             <ListGroupItem key={index} className='animalsList__list-el'>
                            <Link  to={`/card/${animal.id}`}><img src={animal.icon} className='animalsList__list-avatar rounded' width='200px' height='200px' alt='Animal'/></Link>
                            <Link className="h6" to={`/card/${animal.id}`}>{animal.name}</Link>
                            </ListGroupItem>
                            )
                    )}

                </ListGroup>

            </Container>
        </section>

    );

}