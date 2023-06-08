import Image from 'next/image'

import { Carousel } from 'antd';

const range = (start, stop, step = 1) =>
  Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);

const BlackoutDisplay = ({id, currentStage}) => {
    if (currentStage.pages) {
        return <Carousel changeSlide={(e)=>{console.log(e)}}dotPosition="bottom" infinite={false} draggable dots="dotClass" className="imageCarousel">
            {
                range(1, currentStage.pages + 1).map(page => <div key={page}>
                    <Image className="poemImage" src={`/poems/poem.${id}.${currentStage.id}.${page}.png`} width="500" height="500"/>
                </div>)
            }
        </Carousel>
    } else {
        return <>
            {
                <Image className="poemImage" src={`/poems/poem.${id}.${currentStage.id}.png`} width="500" height="500"/>
            }
        </>
    }
}

export default BlackoutDisplay;