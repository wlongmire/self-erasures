import Image from 'next/image'

import { Carousel } from 'antd';

const range = (start, stop, step = 1) =>
  Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);

const BlackoutDisplay = ({id, currentStage}) => {
    const {pages = 1} = currentStage

    return <Carousel dotPosition="bottom" infinite={false} draggable dots="dotClass" className="imageCarousel">
        {
            range(1, pages + 1).map(page => <div key={page}>
                <Image className="poemImage" src={`/poems/poem.${id}.${currentStage.id}.${page}.png`} width="500px" height="500px"/>
            </div>)
        }
    </Carousel>

    // if (currentStage.pages) {
    //     return <Carousel changeSlide={(e)=>{console.log(e)}} dotPosition="bottom" infinite={false} draggable dots="dotClass" className="imageCarousel">
    //         {
    //             range(1, currentStage.pages + 1).map(page => <div key={page}>
    //                 <Image className="poemImage" src={`/poems/poem.${id}.${currentStage.id}.${page}.png`} width="500px" height="500px"/>
    //             </div>)
    //         }
    //     </Carousel>
    // } else {
    //     return <>
    //         {
    //             <Image className="poemImage" src={`/poems/poem.${id}.${currentStage.id}.png`} width="500px" height="500px"/>
    //         }
    //     </>
    // }
}

export default BlackoutDisplay;