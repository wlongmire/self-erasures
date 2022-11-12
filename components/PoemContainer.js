import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'

import Slider from 'react-slick'

import ReactAudioPlayer from 'react-audio-player';
import contributions from './../pages/data/contributions';

export default class PoemContainer extends React.Component {
    state = {
        isSelecting:false
    };

    getContributorLink = (contributorId, type) => {
        const {first, last} = contributions[contributorId]
        return <p><a href={`/contributors#${first}-${last}`}>{type} By {first} {last}</a></p>
    }

    render() {
        const { stageIndex, setStageIndex,sliderValue, setSliderValue} = this.props;
        
        const settings = {
            dots: false,
            fade: true,
            arrows:false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide:stageIndex,
            beforeChange: (current, next) => setStageIndex(next)
        };

        const { stages, id }= this.props.erasure;
        const currentStage = stages[stageIndex];
        const { image } = currentStage;
        const { audio } = currentStage;
        const versionText = "";

        return <>
            <div className="col-7">
                <div className="poemContainer">
                <h4>{`BLACKOUT ${id}: `}</h4>
                <h1>{currentStage.title}</h1>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {
                        stages.map((poem, i) => (<div key={poem.id} >
                            <Image src={`/poems/poem.${id}.${i+1}.png`} width="650" height="650" alt={i}/>
                        </div>))
                    }
                </Slider>

                <h4>{`${versionText} ${moment(currentStage.date).format("M.D.YYYY")}`}</h4>

                <input
                    onChange={e => {
                        setSliderValue(e.target.value)
                        this.slider.slickGoTo(Math.round(e.target.value))
                    }}
                    onMouseDown={e => this.setState({isSelecting:true})}
                    onMouseUp={e => {
                        this.setState({isSelecting:false});
                        setSliderValue(stageIndex);
                    }}
                    className="form-range"
                    value={sliderValue}
                    type="range"
                    step="0.01"
                    min="0"
                    max={stages.length-1}
                />
                {
                    audio && <>
                        <ReactAudioPlayer src={`/audio/${audio.src}`} autoPlay controls/>
                        {this.getContributorLink(audio.contributor, "Audio")}
                    </>
                }
                
            </div>
            <div className="col-3">
                <div id="BackgroundCarousal" >
                    {
                        image && <>
                            <a href={image.srcLink}><Image src={`/images/${image.src}`} width="400" height="400" alt={image.imageSrc}/></a>
                            {this.getContributorLink(image.contributor, "Image")}
                        </>
                    }
                </div>
            </div>
        </div>
    </>;}
}