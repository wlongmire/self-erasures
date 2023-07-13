import { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight,  faSquareCaretLeft, faImage, faChevronLeft, faChevronRight, faBook} from '@fortawesome/free-solid-svg-icons'

import { PoemStylePhone, PoemIndex, PoemButtonPhone, ArrowContainer, SwitchButtonContainer, SwitchButtonContainerInactive, CollageFrameMobile } from '../styles/styleModules';
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
    
    const settings = {
        dotPosition:"none",
        dots: false,
        draggable:true,
        touchMove: false,
        speed: 300
    };

    const images = [
        "v1/574f88123c44d86f06c2bc65/1683213529929-ECXBOTGRRZCJAQ6O0V58/Bowlan+Precarious+Survival+1.jpg",
        "v1/574f88123c44d86f06c2bc65/1683213529848-U36IANXJ8JCXXF0GLJNN/Bowlan+Precarious+Survival+2.jpg",
        "v1/574f88123c44d86f06c2bc65/1683213528326-6XGQ3Q9EQ1L5I9YO8RKI/Bowlan+Precarious+Survival+3.jpg",
        "v1/574f88123c44d86f06c2bc65/1683213528374-B0MBQBHUQ3X09D8AU587/Bowlan+Precarious+Survival+4.jpg"
    ]

    return <Layout>
        <PoemStylePhone>

            <CollageFrameMobile height={50} image={images[1]} position={50} className="collageFrameMobile"/>

            <div id="header">
                <div id="titleContainer">
                    <h1>{currentErasure.title}</h1>
                    <h2>{erasureIdx}.{stageIdx} : {currentStage.title}</h2>
                </div>

                {
                    (image ? (showPoem ? (
                        <SwitchButtonContainer active={false} onClick={()=>{
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
                             <FontAwesomeIcon active={false} className="icon" icon={faChevronLeft}/><FontAwesomeIcon className="icon" icon={faBook}/>
                        </SwitchButtonContainer>)) : <span></span>)
                }
                
            </div>
            
            <Carousel ref={setSliderRef} {...settings}>
                <BlackoutDisplay id={id} currentStage={currentStage} />
                {
                    image ? <div className="sideImageContainer"><ImageHandler image={image}/> </div> :<span></span>
                }
            </Carousel>

            <div className="footer">
                {
                    stages.map(stage => <PoemButtonPhone key={stage.id} className={`btn btn-outline-dark ${(stage.id === currentStage.id) && "active_stage"}`} 
                        onClick={
                            ()=> {
                                setShowPoem(true); 
                                sliderRef?.goTo(0); 
                                setPoem(erasureIdx, stage.id)
                            }
                        }>
                        <h5 className="m-0 p-0">{stage.title}</h5>
                        <div><em>{stage.season}</em></div>
                    </PoemButtonPhone>)
                }
            </div>
            
            <CollageFrameMobile height={20} image={images[1]} position={10} className="collageFrameMobile"/>

            <div id="header">
                <ArrowContainer>
                    <FontAwesomeIcon className={`arrow poemScrub ${(erasureIdx === 1) && "inactive"}`} icon={faSquareCaretLeft}  onClick={()=> {(erasureIdx > 1) && setPoem(erasureIdx - 1, 1)}}/>
                </ArrowContainer>
                <PoemIndex>{id} / {totalErasures}</PoemIndex>
                <ArrowContainer>
                    <FontAwesomeIcon className={`arrow poemScrub ${(erasureIdx === erasures.items.length) && "inactive"}`}  icon={faSquareCaretRight}  onClick={()=> {(erasureIdx < erasures.items.length) && setPoem(erasureIdx + 1, 1)}}/>
                </ArrowContainer>
            </div>

            <CollageFrameMobile height={50} image={images[3]} position={0} className="collageFrameMobile"/>

        </PoemStylePhone>
    </Layout>;

}

export default PoemContainerPhone;
