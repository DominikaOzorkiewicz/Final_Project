import React from 'react';
import {Container, Row, Col, Media} from "reactstrap";

export const About = () => {


    return (
        <section className='about'>
            <Container className="about__container container" fluid='true'>

                <h3 className='about__title'>About me</h3>

                <Row className='about__content'>

                    <Col sm={6} lg={4} className='about__img rounded'/>
                    <Col fluid='true' lg={8} className='about__text'>
                        <h3 style={{textAlign: 'center'}}>Let's talk about pets</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate debitis fugit hic incidunt laborum possimus quidem repellendus suscipit temporibus?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore doloremque eligendi id itaque molestias quae similique, tenetur. Alias ea, iusto molestiae natus obcaecati possimus reiciendis rem sequi! Inventore, quos.</p>

                    </Col>

                </Row>

            </Container>
        </section>

    );
}