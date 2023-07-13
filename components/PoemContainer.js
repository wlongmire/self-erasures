import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight,  faSquareCaretLeft} from '@fortawesome/free-solid-svg-icons'

import { PoemStyle, PoemIndex, PoemButton, ArrowContainer } from './../styles/styleModules';
import { Layout } from "antd";

import BlackoutDisplay from './BlackoutDisplay';
import ImageHandler from './ImageHandler';

import erasures from './../data/erasures.json';

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
        <PoemStyle titleColor={image ? "white" : "#F6D54C"} titleAlpha={image ? 0.5 : 0.8}  titlePosition={image ? -9.5:-8.9}>
            
            
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
                    <FontAwesomeIcon className={`arrow poemScrub ${(erasureIdx === 1) && "inactive"}`} icon={faSquareCaretLeft}  onClick={()=> (erasureIdx > 1) && setPoem(erasureIdx - 1, 1)}/>
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
                    <FontAwesomeIcon className={`arrow poemScrub ${(erasureIdx === erasures.items.length) && "inactive"}`}  icon={faSquareCaretRight}  onClick={()=> (erasureIdx < erasures.items.length) && setPoem(erasureIdx + 1, 1)}/>
                </ArrowContainer>
            </div>           
        </PoemStyle>
    </Layout>;

}

export default PoemContainer;