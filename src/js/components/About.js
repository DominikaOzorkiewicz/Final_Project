import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {Container, Row, Col, Button} from "reactstrap";

export const About = () => {


    return (
        <section className='about'>
            <Container className="about__container container" fluid='true'>

                <h3 className='about__title'>&nbsp;</h3>

                <Row className='about__content'>

                    <Col sm={6} lg={4} className='about__img rounded'/>
                    <Col fluid='true' lg={8} className='about__text'>
                        <h3 style={{textAlign: 'center', marginBottom: '30px'}}>Let's talk about pets</h3>
                        <p>This site was created as the final project of the 'JavaScript Developer: React' course.</p>
                        <p>I have never been indifferent to the fate of animals.
                            One day I found a kitten in the middle of the road, but unfortunately I couldn't take him home with me. All I knew from the vet was that he would be taken to a shelter. Later, I was looking at the websites of shelters in the area to check, if the kitten was alright and maybe adopt him</p>
                        <p>This site is intended for people, who want to look for an animal for adoption from the shelter, to make their small paws happy again.</p>

                    </Col>

                </Row>

                <Row className='about__socialmedia' >
                    <SocialIcon network='github' bgColor='#1C1C1C' src='http://github.com/DominikaOzorkiewicz'/>
                    <SocialIcon network='linkedin' bgColor='#007FB1' src='http://linkedin.com'/>
                    <SocialIcon network='email' bgColor='#CB2128'/>
                </Row>

            </Container>
        </section>

    );
}