import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsPinterest, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <Container>
            <Container className='footer'>
                <Row>
                    <Col>
                        <h5>navigation</h5>
                        <ul>
                            <li>hallo</li>
                            <li>hallo</li>
                            <li>hallo</li>
                            <li>hallo</li>
                            <li>hallo</li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>hilfe</h5>
                        <ul>
                            <li>hallo</li>
                            <li>hallo</li>
                            <li>hallo</li>
                            <li>hallo</li>
                            <li>hallo</li>
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
            <Container className='white-footer'>
                <BsPinterest style={{color: '#5c5c5c', fontSize: '25px'}} />
                <BsInstagram style={{color: '#5c5c5c', fontSize: '25px'}} />
            </Container>
        </Container>
    )
}
export default Footer;