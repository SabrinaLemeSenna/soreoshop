import React from 'react';
import { Carousel as CarouselComponent } from 'react-materialize';
import Carousel1 from '../images/carousel1.png';
import Carousel2 from '../images/carousel2.png';
import Carousel3 from '../images/carousel3.png';


const Carousel = () => (
    <CarouselComponent
        carouselId="carousel"
        images={[
            Carousel1,
            Carousel2,
            Carousel3,
        ]}
        options={{
            dist: -100,
            duration: 200,
            fullWidth: true,
            indicators: true,
            noWrap: false,
            numVisible: 5,
            onCycleTo: null,
            padding: 0,
            shift: 0
        }}
    />
);

export default Carousel;