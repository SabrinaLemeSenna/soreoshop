import React from 'react';
import Carousel from './Carousel';
import Product from './Product';
import { Container } from 'react-bootstrap';

const Home = () => {
    return(
        <Container>
            <Carousel />
            <Container className='best-seller-container'>
                <h1>Best Seller</h1>
            </Container>
            <Container className='d-flex justify-content-center justify-content-between'>
                    <Product />
                    <Product />
                    <Product />
            </Container>
        </Container>
    )
}

export default Home