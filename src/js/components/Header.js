import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export const Header = ({ userLogged, eventlogUser }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [logged, setLogged] = useState(userLogged);

    const toggle = () => setIsOpen(!isOpen);

    //change logged status true/false
    useEffect(() => {
        setLogged(userLogged);
    });

    const handleLogOut = () => {
        eventlogUser(false);
    }


    return (
        <header className='header' >
            <Container className='header__container container' fluid='true'>

                <Navbar className='d-flex justify-content-around' light expand='md'>

                    <NavbarBrand href='/home' className='logo' ><img className='logo__img' src="https://img.icons8.com/cotton/64/000000/cat-footprint--v1.png" alt='Paw icon'/>Happy Paws</NavbarBrand>
                    <NavbarToggler onClick={toggle} className="mr-2"/>
                    <Collapse  isOpen={isOpen} navbar>

                        <Nav className='mr-auto' navbar >

                            {logged === true &&
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Make paws happy!
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink tag={Link} to='/catList' className='menu__link-el' >Cats</NavLink>
                                        </DropdownItem>

                                        <DropdownItem>
                                            <NavLink tag={Link} to='/dogList' className='menu__link-el' >Dogs</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            }

                            <NavItem>
                                <NavLink tag={Link} to="/about" className='menu__link-el'>About</NavLink>
                            </NavItem>

                            {logged === true &&
                                <NavItem>
                                    <NavLink tag={Link} to='/contact' className='menu__link-el'>Contact</NavLink>
                                </NavItem>
                            }
                        </Nav>

                        {logged === true &&
                            <Link className='ml-auto' to='/userpanel' >
                                <svg className="bi bi-person-fill"  width="2.5em" height="2.5em" viewBox="0 0 16 16"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                            </Link>
                        }

                        <NavItem className='float-right'>
                            {logged === true ?
                                <Button tag={Link} to='/' onClick={handleLogOut}>Log out</Button>
                                : <Button tag={Link} to='/login'>Log in</Button>
                            }
                        </NavItem>

                    </Collapse>

                </Navbar>

            </Container>
        </header>
    );


}