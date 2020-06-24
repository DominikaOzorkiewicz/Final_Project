import React from "react";
import {Button, Container} from 'reactstrap';

export const NotFound = () => {

    const returnBtnStyle = {
        backgroundColor: '#AB696E',
        color: '#FFFBFB',
        textDecoration: 'none'
    }

    const flexStyle = {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }


    return (
        <Container className="notFound__container container" fluid={true} style={flexStyle}>
            <h2>Page not found</h2>
            <Button color='link' href='/' style={returnBtnStyle}>Return</Button>
        </Container>
    );
}