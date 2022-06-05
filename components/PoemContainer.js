import React from 'react';
import Image from 'next/image'

import Slider from 'react-slick';
import { Random, Wave } from 'react-animated-text';
import moment from 'moment';

export default class PoemContainer extends React.Component {
    state = {
        stageIndex: 0,
        sliderValue: 0,
        version:2,
        isSelecting:false,
        stages:[
          {
            id: 1,
            title:"Wellness Plan/Mood Episode",
            date: moment().subtract(5, 'years')
          },
          {
            id: 2,
            title:"Wellness/Episode",
            date: moment().subtract(3, 'years')
          },
          {
            id: 3,
            title:"BOX",
            date: moment().subtract(1, 'months')
          }
      ]
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
    
        const { version, stages, stageIndex } = this.state;
        const currentStage = stages[stageIndex];
        const versionText = (stageIndex == 0)?"Original":`Version ${stageIndex}`;
        
        return <div className="poemContainer">
            <h2>
                <Random
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
                        <Image src={`/poems/poem.1.${i+1}.v${version}.png`} width="650" height="650" alt={i}/>
                    </div>))
                }
            </Slider>

            <h4>{`${versionText} | ${currentStage.date.format("M.D.YYYY")}`}</h4>

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
    
        </div>;
    }
}