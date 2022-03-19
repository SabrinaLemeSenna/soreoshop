import React from 'react';
import Logo from '../images/logo.jpg';
import NavbarComponent from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navbar = () => {
    return (
        <NavbarComponent collapseOnSelect className='navbar' fixed="top" expand="sm">
            <Container>
                <NavbarComponent.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarComponent.Brand href="#home">
                    <img width="30%" src={Logo} className="logo-img d-inline-block align-top" alt="React Bootstrap logo"/>
                </NavbarComponent.Brand>
                <NavbarComponent.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end" as="ul">
                        <Nav.Item className='navitem' as="li">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/shop">Shop</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/workshops">Workshops</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </NavbarComponent.Collapse>
                <Nav.Link href="/cart">Cart</Nav.Link>
            </Container>
        </NavbarComponent>
    )
}

export default Navbar;