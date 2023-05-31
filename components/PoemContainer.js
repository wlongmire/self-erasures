import React from 'react'
import Image from 'next/image'
import { Carousel } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight,  faSquareCaretLeft} from '@fortawesome/free-solid-svg-icons'

import { PoemStyle, PoemIndex, PoemButton, ArrowContainer } from './../styles/styleModules';

import { Layout } from "antd";

import contributions from './../data/contributions';
import erasures from './../data/erasures.json';

const range = (start, stop, step = 1) =>
  Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);


const ImageHTML = ({image}) => {
    return (image.video) ? 
        <iframe width="500" height="500" src={`${image.src}`} title="YouTube video player" frameborder="0" allow="autoplay;"></iframe>:
        <Image className="sideImage" src={`/images/${image.src}`} width="500" height="500" alt={image.src}/>
}

const ImageHandler = ({image}) => {
    const getContributorLink = (contributorId, type) => {
        if (contributorId) {
            const {first, last} = contributions[contributorId]
            return <p className="image_contributor"><a href={`/contributors#${first}-${last}`}>{type} By {first} {last}</a></p>
        } else {
            return <p className="image_contributor"><a href={`/poet`}>{type} By Heather Bowlan</a></p>
        }
        
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
                    {
                        <span>{getContributorLink(i.contributor, "Image")}</span>
                    }
                </div>)
            }
        </Carousel>   
    }
}

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

const PoemContainer = ({ erasureIdx, stageIdx, setPoem }) => {
    const totalErasures = erasures.items.length;
    const currentErasure = erasures.items[erasureIdx - 1]
    const currentStage = currentErasure.stages[stageIdx - 1]

    const { stages, id } = currentErasure;
    const { image, audio } = currentStage;
    
    const handleScrub = (e) => {
        const inc = parseInt(e.target.dataset.direction)
        const { type } = e.target.dataset
        
        setPoem(erasureIdx + inc, 1)
    }
    
    return <Layout>
        <PoemStyle titleColor={image ? "white" : "black"} titlePosition={image ? -9.5:-8.9}>
            <div className="header">
                <PoemIndex>{id} / {totalErasures}</PoemIndex>
            </div >
            

            <div className="poemContainer">
                <BlackoutDisplay id={id} currentStage={currentStage} />
                
                <div className="sideImageContainer">
                    <ImageHandler image={image}/>
                    <h1 className="sideImageTitle">{currentStage.title}</h1>
                </div>

            </div>
            
            <div className="footer">
                <ArrowContainer>
                    <FontAwesomeIcon className={`arrow poemScrub ${(erasureIdx === 1) && "inactive"}`} icon={faSquareCaretLeft}  onClick={()=> setPoem(erasureIdx - 1, 1)}/>
                </ArrowContainer>

                {
                    stages.map(stage => <PoemButton key={stage.id} className={`btn btn-outline-dark p-3 ${(stage.id === currentStage.id) && "active_stage"}`} 
                        onClick={
                            ()=> {
                                setPoem(erasureIdx, stage.id)
                            }
                        }>
                        <h5 className="m-0 p-0">{stage.title}</h5>
                        <div><em>{stage.season}</em></div>
                    </PoemButton>)
                }
                <ArrowContainer>
                    <FontAwesomeIcon className={`arrow poemScrub ${(erasureIdx === erasures.items.length) && "inactive"}`}  icon={faSquareCaretRight}  onClick={()=> setPoem(erasureIdx + 1, 1)}/>
                </ArrowContainer>
                    
                {/* <div>
                    {
                        audio && <>
                            <ReactAudioPlayer src={`/audio/${audio.src}`} controls/>
                            {getContributorLink(audio.contributor, "Audio")}
                        </>
                    } 
                </div>    */}
            </div>           
        </PoemStyle>
    </Layout>;

}

export default PoemContainer;