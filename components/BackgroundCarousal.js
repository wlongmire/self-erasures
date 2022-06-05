import React from 'react';
import Image from 'next/image'
import Slider from 'react-slick';;
import styles from '../styles/Home.module.css'

export default class BackgroundCarousal extends React.Component {
    state = {
    };

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            easing: 'easeInOutSine'
        };
    
    
        return <div className = { styles.bkCarousal } >
            <Slider {...settings}>
                <Image src="/images/image.1.1.jpg" width="300" height="1000" alt="image.1.1.jpg"/>
                <Image src="/images/image.1.2.jpg" width="300" height="1000"  alt="image.1.2.jpg"/>
                <Image src="/images/image.1.1.jpg" width="300" height="1000" alt="image.1.1.jpg"/>
                <Image src="/images/image.1.2.jpg" width="300" height="1000"  alt="image.1.2.jpg"/>
            </Slider>
        </div>;
    }
}