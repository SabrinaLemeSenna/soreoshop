import React from 'react';
import Carousel from './Carousel';
import Product from './Product';
import HandmadePottery from '../images/pottery_handmade.jpg';
import Sabrina from '../images/sabrina.jpg';
import { Container } from 'react-bootstrap';
import Workshop from './Workshop';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Home = () => {
    return(
        <Container>
            <Carousel />
            <Container className='best-seller-container'>
                <Container className='title-container'>
                    <h1>Best Seller</h1>
                </Container>
                <Container className='d-flex justify-content-center justify-content-between'>
                        <Product />
                        <Product />
                        <Product />
                </Container>
            </Container>
            <Container className='handmade-container'>
                <Container className='d-flex'>
                    <Container>
                        <Container className='title-handmade d-flex justify-content-end'>
                            <h1>100% Handmade</h1>
                        </Container>
                        <Container className='text-handmade1'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        </Container>
                        <Container className='text-handmade2'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Container>
                    </Container>
                    <img src={HandmadePottery}></img>
                </Container>
            </Container>
            <Container className='workshops-container'>
                <Container className='title-container'>
                    <h1>Workshops & Events</h1>
                </Container>
                <Container className='workshop-container d-flex justify-content-center justify-content-between'>
                    <Workshop />
                    <Workshop />
                    <Workshop />
                </Container>
                <Button variant="primary">Go somewhere</Button>
            </Container>
            <Container>
                <Container className='title-container'>
                    <h1>Behind the Scenes</h1>
                </Container>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <img src={Sabrina}></img>
                    </Col>
                    <Col>
                        <Row className='behind-text'>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                        </Row>
                        <Row className='signing'>
                            <h2>Sabrina Senna</h2>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Home