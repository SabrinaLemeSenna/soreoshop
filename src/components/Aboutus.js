import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Soreo from '../images/soreo.jpeg'
import { FaInstagram, FaPinterest } from "react-icons/fa";


const Aboutus = () => {
    return (
        <Container className='aboutus-container'>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <img src={Soreo} alt="s"></img>
                </Col>
                <Col>
                    <h1>Hi! We are Soreo!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    <h3>Follow us on social media:</h3>
                    <Row>
                        <Col style={{textAlign:'right'}} >
                            <FaPinterest style={{color: '#D2A391', fontSize: '35px'}} />
                        </Col>
                        <Col>
                            <FaInstagram style={{color: '#D2A391', fontSize: '35px'}} />
                        </Col>
                    </Row>
                    <p style={{textAlign:'center', paddingTop:'20px'}}>Thank you for coming by &hearts;</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Aboutus;