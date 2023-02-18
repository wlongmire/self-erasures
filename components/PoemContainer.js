import styled from 'styled-components'
import React from 'react'
import Image from 'next/image'

import Slider from 'react-slick'

import ReactAudioPlayer from 'react-audio-player';
import contributions from './../data/contributions';

export default class PoemContainer extends React.Component {
    getContributorLink = (contributorId, type) => {
        const {first, last} = contributions[contributorId]
        return <p><a href={`/contributors#${first}-${last}`}>{type} By {first} {last}</a></p>
    }

    render() {
        const { stageIndex, setStageIndex, setSliderValue} = this.props;
        
        const settings = {
            dots: false,
            fade: true,
            arrows:false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide:stageIndex,
            cssEase: "ease-in-out",
            beforeChange: (current, next) => setStageIndex(next)
        };

        const { stages, id }= this.props.erasure;
        const currentStage = stages[stageIndex];
        const { image } = currentStage;
        const { audio } = currentStage;

        return <>
            <div className="col-7">
                <div className="poemContainer">
                <h4>{`BLACKOUT ${id}: `}</h4>
                <h1>{currentStage.title}</h1>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {
                        stages.map((poem, i) => (<div key={poem.id}>
                            <Image src={`/poems/poem.${id}.${i+1}.png`} width="650" height="650" alt={i}/>
                        </div>))
                    }
                </Slider>

                {/* <h4>{`${moment(currentStage.date).format("M.D.YYYY")}`}</h4> */}
                {
                    stages.map(stage => <button className={`btn btn-outline-dark p-3 m-3`} onClick={()=> { 
                        setSliderValue(stage.id-1);
                        setStageIndex(stage.id-1);
                        this.slider.slickGoTo(stage.id-1);
                    } }>{stage.title}</button>)
                }

                {
                    audio && <>
                        <ReactAudioPlayer src={`/audio/${audio.src}`} controls/>  {/* autoPlay */}
                        {this.getContributorLink(audio.contributor, "Audio")}
                    </>
                }
                {
                    image && this.getContributorLink(image.contributor, "Image")
                }
                {
                    image && <>
                        <Image className="backgroundImage" src={`/images/${image.src}`} width="100" height="1" alt={image.imageSrc}/>
                    </>
                }
            </div>
        </div>
    </>;}
}