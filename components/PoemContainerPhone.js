import { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight,  faSquareCaretLeft, faImage, faChevronLeft, faChevronRight, faBook} from '@fortawesome/free-solid-svg-icons'

import { PoemStylePhone, PoemIndex, PoemButton, ArrowContainer, SwitchButtonContainer } from '../styles/styleModules';
import { Layout, Carousel } from "antd";

import BlackoutDisplay from './BlackoutDisplay';
import ImageHandler from './ImageHandler';

import erasures from '../data/erasures.json';

const Header = styled.div`
    display:flex;
    width:100%;

`

const PoemContainerPhone = ({ erasureIdx, stageIdx, setPoem }) => {
    const [showPoem, setShowPoem] = useState(true)
    
    const totalErasures = erasures.items.length;
    const currentErasure = erasures.items[erasureIdx - 1]
    const currentStage = currentErasure.stages[stageIdx - 1]
    const [sliderRef, setSliderRef] = useState(null)

    const { stages, id } = currentErasure;
    const { image, audio } = currentStage;
    
    const handleScrub = (e) => {
        const inc = parseInt(e.target.dataset.direction)
        const { type } = e.target.dataset
        
        setPoem(erasureIdx + inc, 1)
    }

    const settings = {
        dotPosition:"none",
        dots: false,
        draggable:true,
        easing: "easeInOutSine",
        lazyLoad: true,
        touchMove: false,
        speed: 100
      };
    
    return <Layout>
        <PoemStylePhone>
            <div id="header">
                <div id="titleContainer">
                    <h1>{currentErasure.title}</h1>
                    <h2>{erasureIdx}.{stageIdx}:{currentStage.title}</h2>
                </div>
                {
                    showPoem ? (
                        <SwitchButtonContainer onClick={()=>{
                            setShowPoem(false)
                            sliderRef?.goTo(1)
                        }}>     
                            <FontAwesomeIcon className="icon" icon={faImage}/>
                            <FontAwesomeIcon className="icon" icon={faChevronRight}/> 
                        </SwitchButtonContainer>) : (
                        <SwitchButtonContainer onClick={()=>{
                            setShowPoem(true)
                            sliderRef?.goTo(0)
                        }}>
                             <FontAwesomeIcon className="icon" icon={faChevronLeft}/><FontAwesomeIcon className="icon" icon={faBook}/>
                        </SwitchButtonContainer>)
                }
                
            </div>
            
            <Carousel ref={setSliderRef} {...settings}>
                <BlackoutDisplay id={id} currentStage={currentStage} />
                <div className="sideImageContainer">
                    <ImageHandler image={image}/>
                </div>
            </Carousel>

            {/* <div id="header">
                <ArrowContainer>
                    <FontAwesomeIcon className={`arrow poemScrub ${(erasureIdx === 1) && "inactive"}`} icon={faSquareCaretLeft}  onClick={()=> setPoem(erasureIdx - 1, 1)}/>
                </ArrowContainer>
                <PoemIndex>{id} / {totalErasures}</PoemIndex>
                <ArrowContainer>
                    <FontAwesomeIcon className={`arrow poemScrub ${(erasureIdx === erasures.items.length) && "inactive"}`}  icon={faSquareCaretRight}  onClick={()=> setPoem(erasureIdx + 1, 1)}/>
                </ArrowContainer>
            </div> */}

            {/* <div className="footer">
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
            </div> */}
            
            {/* <div className="poemContainer">
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
            </div>            */}
        </PoemStylePhone>
    </Layout>;

}

export default PoemContainerPhone;
