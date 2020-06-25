import React from 'react';
import {Col, NavbarBrand} from "reactstrap";

export const Footer = () => {


    const footerStyle = {
        width: '100%',
        backgroundColor: '#575555',
        color: '#e1dad9',
        height: '50px',

        flexShrink: 0
    }
    const footerContainerStyle = {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const logoStyle = {
        fontFamily: '"Cormorant", sans-serif',
        color: '#e1dad9',
        fontSize: '1.3em',
        textShadow: '2px 2px 5px #575555',
        marginRight: '50px'
    }

    return (
        <footer className='footer' style={footerStyle} >
            <div className='footer__container container'  >

                <Col style={footerContainerStyle}>
                    <div className="copyright__container">
                        <small className="copyright__small" style={ {paddingRight: '1em'} }>Copyright</small>
                            <NavbarBrand href='/' style={logoStyle} >Happy Paws</NavbarBrand>
                    </div>
                </Col>

            </div>
        </footer>

    );
}