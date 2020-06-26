import React, {useEffect, useState} from 'react';
import {Container} from "reactstrap";
import Firebase from "firebase";

export const AnimalsList = ({animalType,animalList}) => {

    const [animalsList, setAnimalsList] = useState(animalList);



    return (
        <section className='animalsList'>
            <Container className='animalsList__container container' fluid='true' >

                <h3 className='animalsList__title'>{animalType}</h3>

                <ul className='animalsList__list'>
                    { animalsList.map((animal, index) => <li key={index} className='animalsList__list-el'><img src={animal.icon} width='200px' height='200px' style={{objectFit: 'cover'}} alt='Animal'/>{animal.name}</li>) }
                </ul>

            </Container>
        </section>

    );

}