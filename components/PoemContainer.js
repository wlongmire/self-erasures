import React from 'react'
import Image from 'next/image'
import moment from 'moment'

import Slider from 'react-slick'
import { Random } from 'react-animated-text'

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'


export default class PoemContainer extends React.Component {
    state = {
        stageIndex: 0,
        sliderValue: 0,
        isSelecting:false
    };

    render() {
        const settings = {
            dots: false,
            fade: true,
            arrows:false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (current, next) => this.setState({ stageIndex: next })
        };
    
        const { stageIndex } = this.state;

        const { stages }= this.props.erasure;
        const currentStage = stages[stageIndex];
        const versionText = (stageIndex == 0)?"Original":`Version ${stageIndex}`;
        
        return <>
            <div className="col-7">
                <div className="poemContainer">
                <h2><Random
                        text={currentStage.title}
                        iterations="1"
                        effect="verticalFadeIn"
                        effectDirection="up"
                        paused={this.state.isSelecting}
                        effectChange={0.5}/>
                </h2>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {
                        stages.map((poem, i) => (<div key={poem.id} >
                            <Image src={`/poems/poem.1.${i+1}.png`} width="650" height="650" alt={i}/>
                        </div>))
                    }
                </Slider>

                <h4>{`${versionText} | ${moment(currentStage.date).format("M.D.YYYY")}`}</h4>

                <input
                    onChange={e => {
                        this.setState({sliderValue:e.target.value})
                        this.slider.slickGoTo(Math.round(e.target.value))
                    }}
                    onMouseDown={e => this.setState({isSelecting:true})}
                    onMouseUp={e => {
                        this.setState({isSelecting:false});
                        this.setState({
                            sliderValue: stageIndex
                        });
                    }}
                    class="form-range"
                    value={this.state.sliderValue}
                    type="range"
                    step="0.01"
                    min="0"
                    max={stages.length-1}
                />
                {
                    currentStage.audio && <>
                        <AudioPlayer src={`/audio.${currentStage.audio.src}`} />
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