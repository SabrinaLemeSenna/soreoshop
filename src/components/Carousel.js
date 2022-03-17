import React from 'react';
import CarouselComponent from 'react-bootstrap/Carousel';
import Carousel1 from '../images/carousel1.png';
import Carousel2 from '../images/carousel2.png';
import Carousel3 from '../images/carousel3.png';


const Carousel = () => (
    <CarouselComponent fade>
        <CarouselComponent.Item>
            <img
                className="d-block w-100"
                src={Carousel1}
                alt="First slide"
            />
        </CarouselComponent.Item>
        <CarouselComponent.Item>
            <img
                className="d-block w-100"
                src={Carousel2}
                alt="Second slide"
            />
        </CarouselComponent.Item>
        <CarouselComponent.Item>
            <img
                className="d-block w-100"
                src={Carousel3}
                alt="Third slide"
            />
        </CarouselComponent.Item>
    </CarouselComponent>
);

export default Carousel;