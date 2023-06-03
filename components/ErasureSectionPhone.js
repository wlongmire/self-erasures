import { useState } from 'react';

import { Carousel } from 'antd';
import { useRouter } from 'next/router';

// import PoemContainer from './PoemContainer';
import erasures from './../data/erasures.json';


const ErasureSection = ({erasureIdx, stageIdx}) => {
    const router = useRouter();
    const [sliderRef, setSliderRef] = useState(null)
    const [erasureId, setErasureId] = useState(erasureIdx)
    const [stageId, setStageId] = useState(stageIdx)

    const setPoem = (erasureValue, stageValue) => {
        if (erasureValue && stageValue) {
            erasureValue = (erasureValue <= 1) ? 1 : erasureValue
            erasureValue = (erasureValue >= erasures.length)?erasures.length:erasureValue
            
            stageValue = (stageValue <= 1) ? 1 : stageValue
            stageValue = (stageValue >= erasures.items[erasureValue-1].stages.length) ? erasures.items[erasureValue-1].stages.length:stageValue
    

            setErasureId(erasureValue)
            setStageId(stageValue)
            
            router.push(`/blackouts?poem=${erasureValue}&stage=${stageValue}`, undefined, { shallow: true });
            sliderRef?.goTo(erasureValue -1)
        }
    }

    const settings = {
        dotPosition:"bottom",
        initialSlide:erasureId-1, 
        infinite:false, 
        draggable:false,
        easing: "easeInOutSine",
        lazyLoad: true,
        dots:false, 
        speed: 500,
        beforeChange: (current, next) => {
            if (current !== next) {
                setPoem(next+1, 1)
            }
        }
      };


    return <div id="erasurePhone">
        <Carousel ref={setSliderRef} className="imageCarousel" {...settings}>
            {
                erasures.items.map(e => <div key={e.id}>
                    {e.title}
                </div>)
            }
        </Carousel>   
        
    </div>
}

export default ErasureSection;