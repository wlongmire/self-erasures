import React from 'react';
import Image from 'next/image'


import Slider from 'react-slick'
import styles from '../styles/Home.module.css'

export default class BackgroundCarousal extends React.Component {
    state = {};

    render() {
        const settings = {
            infinite: true,
            vertical: true,
            dots:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 1000,
            easing: 'easeInOutSine'
        };
    
        return <div id="BackgroundCarousal" >
            <Slider {...settings}>
                <div className="slide">
                    <Image src="/images/image.1.1.jpg" width="400" height="400" alt="image.1.1.jpg"/>
                    <p><a href="https://www.instagram.com/p/Cd9JRu9JCUS/">Image By Firstname Lastname</a></p>
                </div>
                <div className="slide">
                    <Image src="/images/image.1.2.jpg" width="400" height="400"  alt="image.1.2.jpg"/>
                    <p><a href="https://www.instagram.com/p/Cd9JRu9JCUS/">Image By Firstname Lastname</a></p>
                </div>
                
            </Slider>
        </div>;
    }
}