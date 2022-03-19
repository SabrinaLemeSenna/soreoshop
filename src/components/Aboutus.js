import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Soreo from '../images/soreo.jpeg'

const Aboutus = () => {
    return (
        <Container className='aboutus-container'>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <img src={Soreo} alt="s"></img>
                </Col>
                <Col>
                    <h1>Hi! We are Soreo!</h1>
                    <p>frnkgeriogje oslgoirfgjsdl nriugkerio</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Aboutus;