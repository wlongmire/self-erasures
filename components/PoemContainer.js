import React from 'react'
import Image from 'next/image'
import { Carousel } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight,  faSquareCaretLeft} from '@fortawesome/free-solid-svg-icons'

import ReactAudioPlayer from 'react-audio-player';

import { PoemStyle } from './../styles/styleModules';

import { Layout } from "antd";

import contributions from './../data/contributions';
import erasures from './../data/erasures.json';

const range = (start, stop, step = 1) =>
  Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);


const ImageHTML = ({image}) => {
    return (image.video) ? 
        <iframe width="500" height="500" src={`${image.src}?loop=1&autoplay=1&mute=1&rel=0`} title="YouTube video player" frameborder="0" allow="autoplay;"></iframe>:
        <Image className="sideImage" src={`/images/${image.src}`} width="500" height="500" alt={image.src}/>
}

const ImageHandler = ({image}) => {
    const getContributorLink = (contributorId, type) => {
        const {first, last} = contributions[contributorId]
        return <p className="image_contributor"><a href={`/contributors#${first}-${last}`}>{type} By {first} {last}</a></p>
    }
    
    if (!image) {
        return <>
             <Image className="sideImage" src={`/images/paper_background.jpeg`} width="500" height="500" alt={"image"}/>
        </>
    } else if (image.length === 1) {
        return <>
            <ImageHTML image={image[0]}/>
            <span>{getContributorLink(image[0].contributor, "Image")}</span>
        </>
    } else {
        return <Carousel dotPosition="right" className="imageCarousel" autoplay="true" draggable autoplaySpeed={5000} effect="fade">
            {
                image.map(i => <div>
                    <ImageHTML image={i}/>
                    <span>{getContributorLink(i.contributor, "Image")}</span>
                </div>)
            }
        </Carousel>   
    }
}

const BlackoutDisplay = ({id, currentStage}) => {
    if (currentStage.pages) {
        return <Carousel dotPosition="bottom" infinite={false} draggable dots="dotClass" className="imageCarousel">
            {
                range(1, currentStage.pages + 1).map(page => <div>
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

const PoemContainer = ({ erasureIdx, stageIdx, setPoem }) => {
    const currentErasure = erasures.items[erasureIdx - 1]
    const currentStage = currentErasure.stages[stageIdx - 1]

    const { stages, id } = currentErasure;
    const { image, audio } = currentStage;
    
    const handleScrub = (e) => {
        const inc = parseInt(e.target.dataset.direction)
        const { type } = e.target.dataset
        
        if (type === "poem") {
            setPoem(erasureIdx + inc, 1)
        } else {
            setPoem(erasureIdx, stageIdx + inc)
        }
    }

    return <Layout>
            <PoemStyle titleColor={image ? "white" : "black"} titlePosition={image ? -9.5:-8.9}>
                <div className="header">
                    {/* <h4>{currentStage.title}</h4> */}
                    <div className="scrubs">
                        <span>
                            <FontAwesomeIcon onClick={handleScrub} data-type="blackout" data-direction="-1" className="arrow" icon={faSquareCaretLeft} />
                            Blackout {id}
                            <FontAwesomeIcon onClick={handleScrub} data-type="blackout" data-direction="1" className="arrow"  icon={faSquareCaretRight} />
                        </span>
                        <span>
                            <FontAwesomeIcon onClick={handleScrub} data-type="stage" data-direction="-1" className="arrow" icon={faSquareCaretLeft} />
                            Stage {currentStage.id}
                            <FontAwesomeIcon onClick={handleScrub} data-type="stage" data-direction="1" className="arrow"  icon={faSquareCaretRight} />
                        </span>    
                    </div>
                </div >
                

                <div className="poemContainer">
                    <BlackoutDisplay id={id} currentStage={currentStage} />
                    
                    <div className="sideImageContainer">
                        <ImageHandler image={image}/>
                        <h1 className="sideImageTitle">{currentStage.title}</h1>
                    </div>

                </div>
                
                <div className="footer">
                    <div>
                        {
                            stages.map(stage => <button key={stage.id} className={`btn btn-outline-dark p-3 m-3 ${(stage.id === currentStage.id) && "active_stage"}`} onClick={()=> { 
                                setPoem(erasureIdx, stage.id);
                            } }>
                                <div>{stage.title}</div>
                                <div><em>{stage.season}</em></div>
                            </button>)
                        }
                    </div>
                    <div>
                        {
                            audio && <>
                                <ReactAudioPlayer src={`/audio/${audio.src}`} controls/>  {/* autoPlay */}
                                {/* {getContributorLink(audio.contributor, "Audio")} */}
                            </>
                        } 
                    </div>   
                </div>           
        </PoemStyle>
    </Layout>;

}

export default PoemContainer;