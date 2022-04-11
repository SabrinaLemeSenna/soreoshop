import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Workshop from './Workshop';

const Workshops = () => {
    return (
        
        <Container className='workshop-page-container'>
            <h1>Workshops &amp; Events</h1>
            <Row>
                <Col d-flex justify-content-end>
                    <Workshop>
                        Hello
                    </Workshop>
                </Col>
                <Col>
                    <p>HELLOOOO</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Workshop>
                        Hello
                    </Workshop>
                </Col>
                <Col>
                    <p>HELLOOOO</p>
                </Col>
            </Row>
        </Container>
    )

}

export default Workshops;