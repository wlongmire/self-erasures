import React from 'react';
import Image from 'next/image'

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

import Slider from 'react-slick'
import styles from '../styles/Home.module.css'

export default class BackgroundCarousal extends React.Component {
    state = {};

    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 1000,
            easing: 'easeInOutSine'
        };
    
        return <div id="BackgroundCarousal" >
            <Slider {...settings}>
                <Image src="/images/image.1.1.jpg" width="300" height="300" alt="image.1.1.jpg"/>
                <Image src="/images/image.1.2.jpg" width="300" height="300"  alt="image.1.2.jpg"/>
            </Slider>
            <iframe 
                width="100%" height="300" scrolling="no" frameborder="no" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/796904044&auto_play=false&hide_related=true">
            </iframe>
        </div>;
    }
}