import React from 'react';
import Logo from '../images/logo.jpg';
import NavbarComponent from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


const Navbar = () => {
    return (
        <NavbarComponent collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
            <Container>
                <NavbarComponent.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarComponent.Brand href="#home">
                    <img
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </NavbarComponent.Brand>
                <NavbarComponent.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/workshops">Workshops</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                    </Nav>
                </NavbarComponent.Collapse>
            </Container>
        </NavbarComponent>
    )
}

export default Navbar;