import React from 'react';
import {Container, Row, Col, Media} from "reactstrap";

export const About = () => {

    const aboutTitleStyle = {
        //display: 'flex',
        //justifyContent: 'center',
        //alignItems: 'center',
        margin: '50px'
    }

    const imgAbout = {
        backgroundImage: 'url("https://images.pexels.com/photos/3294248/pexels-photo-3294248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        maxWidth: '360px',
        minHeight: '15em'
    }


    return (
        <section className='about' style={{fontFamily: 'Cormorant', fontSize: '1.5625em'}} >
            <Container className="about-container container" fluid='true' style={ {display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'} }>

                <Row>
                    <Col style={aboutTitleStyle}><h2 >About me</h2></Col>
                </Row>

                <Row style={ {justifyContent: 'center', border: '1px dotted gold'} }>

                    <Col sm={6} lg={4} style={imgAbout} />
                    <Col fluid='true' lg={8} style={{padding: '10px'}}>
                        <h3 style={{textAlign: 'center', margin: '20px'}}>Let's talk about pets</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate debitis fugit hic incidunt laborum possimus quidem repellendus suscipit temporibus?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore doloremque eligendi id itaque molestias quae similique, tenetur. Alias ea, iusto molestiae natus obcaecati possimus reiciendis rem sequi! Inventore, quos.</p>

                    </Col>

                </Row>

            </Container>
        </section>

    );
}