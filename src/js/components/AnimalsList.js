import React, {useEffect, useState} from 'react';
import {Container} from "reactstrap";
import Firebase from "firebase";

export const AnimalsList = ({animalType,animalList}) => {

    const [animalsList, setAnimalsList] = useState(animalList);



    return (
        <section className='animalsList'>
            <Container className="animalsList-container container" fluid='true' >

                <h3 style={{textAlign: 'center', margin: '20px', fontSize: '1.875em'}}>{animalType}</h3>

                <ul>
                    { animalsList.map((animal, index) => <li key={index} ><img src={animal.icon} width='200px' height='200px' style={{objectFit: 'cover'}}/>{animal.name}</li>) }
                </ul>

            </Container>
        </section>

    );

}