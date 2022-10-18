import React from 'react'
import Image from 'next/image'
import moment from 'moment'

import Slider from 'react-slick'
import { Random } from 'react-animated-text'

import ReactAudioPlayer from 'react-audio-player';


export default class PoemContainer extends React.Component {
    state = {
        isSelecting:false
    };

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
                    currentStage.audio && <>
                        <ReactAudioPlayer src={`/audio/${currentStage.audio.src}`} autoPlay controls/>
                    </>
                }
                
            </div>
            <div className="col-3">
                <div id="BackgroundCarousal" >
                    {
                        currentStage.image && <div>
                            <a href={currentStage.image.srcLink}><Image src={`/images/${currentStage.image.src}`} width="400" height="400" alt={currentStage.imageSrc}/></a>
                            <p><a href={currentStage.image.attribution.link}>Image By {currentStage.image.attribution.firstName} {currentStage.image.attribution.lastName}</a></p>
                        </div>
                    }
                </div>
            </div>
        </div>
    </>;}
}