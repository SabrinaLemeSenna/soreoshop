import React from 'react';
import M from 'materialize-css';
import Carousel1 from '../images/carousel1.png';
import Carousel2 from '../images/carousel2.png';
import Carousel3 from '../images/carousel3.png';


 const Carousel = ()=>{
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instance = M.Carousel.init(elems, {fullWidth: true,
            indicators: true});
      });
    return(
        <div class="carousel carousel-slider center">
            <div class="carousel-item">
                <a>
                    <img src={Carousel1}></img>
                </a>
            </div>
            <div class="carousel-item" href="#one!">
                <a>
                    <img src={Carousel2}></img>
                </a>
            </div>
            <div class="carousel-item" href="#two!">
                <a>
                    <img src={Carousel3}></img>
                </a>
            </div>
        </div>
        
        )
}

export default Carousel;