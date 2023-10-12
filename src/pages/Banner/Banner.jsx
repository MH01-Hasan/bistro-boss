import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import bannerimage1 from '../../assets/contact/home/01.jpg'
import adiba from '../../assets/contact/home/01.jpg'
import adiba1 from '../../assets/contact/home/02.jpg'
import adiba2 from '../../assets/contact/home/03.png'
import sanjida from '../../assets/contact/home/04.jpg'
import sanjida1 from '../../assets/contact/home/05.png'

const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={adiba} />
            
        </div>
        <div>
            <img src={adiba1} />
           
        </div>
        <div>
            <img src={adiba2} />
           
        </div>
        <div>
            <img src={sanjida} />
            
        </div>
        <div>
            <img src={sanjida1} />
         
        </div>
       
    </Carousel>
    );
};

export default Banner;