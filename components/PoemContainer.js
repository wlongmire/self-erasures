import React from 'react';
import Image from 'next/image'
import Slider from 'react-slick';
import moment from 'moment';

export default class SlickGoTo extends React.Component {
    state = {
      currentStage: 0,
      version:2, 
      poems:[
          {
            id: 1,
            date: moment().subtract(5, 'years')
          },
          {
            id: 2,
            date: moment().subtract(3, 'years')
          },
          {
            id: 3,
            date: moment().subtract(1, 'months')
          }
      ]
    };

    render() {
        const settings = {
            dots: false,
            fade: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (current, next) => this.setState({ currentStage: next })
        };
    
        const { version, poems, currentStage } = this.state;
        const currentPoem = poems[currentStage];
        const versionText = (currentStage == 0)?"Original":`Version ${currentStage}`;
        
        return <div>
            
            <Slider ref={slider => (this.slider = slider)} {...settings}>
                {
                    poems.map((poem, i) => (<div>
                        <Image src={`/poems/poem.1.${i+1}.v${version}.png`} width="650" height="650" alt={i}/>
                    </div>))
                }
            </Slider>
            <h3>{`${versionText} | ${currentPoem.date.format("M.D.YYYY")}`}</h3>
            <input
                onChange={e => this.slider.slickGoTo(Math.round(e.target.value))}
                class="form-range"
                // value={this.state.currentStage}
                type="range"
                step="0.01"
                min="0"
                max={poems.length-1}
            />
    
        </div>;
    }
}