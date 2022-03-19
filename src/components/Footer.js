import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <Container fluid>
            <Container fluid className='footer'>
                <Row>
                    <Col>
                        <h5>navigation</h5>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="/workshops">Workshops</a></li>
                            <li><a href="/aboutus">About us</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>hilfe</h5>
                        <ul>
                            <li><a href="/agb">AGB</a></li>
                            <li><a href="/dataprotection">Data Protection</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/imprint">Imprint</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>impressum</h5>
                        <p>Sabrina Senna</p>
                        <p>81234 München</p>
                        <p>Germany</p>
                    </Col>
                </Row>
            </Container>
            <Row className='d-flex justify-content-between white-footer'>
                <Col>
                    <h6>&copy;Soreo</h6>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <FaPinterest style={{color: '#5c5c5c', fontSize: '25px'}} />
                    <FaInstagram style={{color: '#5c5c5c', fontSize: '25px'}} />
                </Col>
                <Col className='d-flex justify-content-end'>
                    <h6>Made with Love!</h6>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer;