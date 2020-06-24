import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText, Button } from 'reactstrap';


export const Header = ({ userLogged }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [logged, setLogged] = useState(userLogged);

    const toggle = () => setIsOpen(!isOpen);

    //change logged status true/false
    const setLoggedFunction = () => {
        setLogged(!logged);
    }

    useEffect(() => {
        console.log(`działa ${userLogged}`);
        setLogged(userLogged);
    });




    const logoStyle = {
        fontFamily: '"Cormorant", sans-serif',
        color: '#6D6D6D',
        fontSize: '3.125em',
        textShadow: '2px 2px 5px #575555',
        marginRight: '50px'
    }
    const iconStyle = {
        fill: 'rgba(171, 105, 110, 0.71)',
        marginRight: '10px'
    }

    const navStyle = {
        color: '#8D8585',
    }


    return (
        <header className='header' style={ {borderBottom: '1px solid rgba(141, 133, 133, 0.38)'} }>
            <Container className='header__container container' fluid={true}>

                <Navbar color='transparent' light expand='md'>

                    <NavbarBrand href='/' style={logoStyle} >Happy Paws</NavbarBrand>
                    <NavbarToggler onClick={toggle} className="mr-2"/>
                    <Collapse isOpen={isOpen} navbar>

                        <Nav className='mr-auto' navbar>

                            {logged === true &&
                                <NavItem>
                                <NavLink tag={Link} to='/' className='menu__link-el' >Make paws happy!</NavLink>
                                </NavItem>
                            }

                            <NavItem>
                                <NavLink tag={Link} to="/about" className='menu__link-el'>About us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to='/contact' className='menu__link-el'>Contact</NavLink>
                            </NavItem>
                        </Nav>

                        {logged === true &&
                        <svg className="bi bi-person-circle" width='2.5em' height='2.5em' style={iconStyle} viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                            <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fillRule="evenodd"
                                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                        </svg> }

                        <NavbarText>{logged === true ?
                            <Button tag={Link} to='/home'>Log out</Button>
                                : <Button tag={Link} to='/login'>Log in</Button> }</NavbarText>

                    </Collapse>

                </Navbar>



                {/*<nav className='menu'>
                    <ul className='menu__list'>
                        <li className='menu__link is-active' >
                            <Link to='/' className='menu__link-el' >Make paws happy!</Link>
                        </li>

                        <li  className='menu__link' >
                            <Link to='/about' className='menu__link-el' >About us</Link>
                        </li>

                        <li className='menu__link' >
                            <Link to='/contact' className='menu__link-el' >Contact</Link>
                        </li>
                    </ul>
                </nav> */}


            </Container>
        </header>
    );


}