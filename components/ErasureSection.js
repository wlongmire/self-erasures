import { useState } from 'react';
import tags from './../data/tags.json';
import erasures from './../data/erasures.json';

import PoemContainer from './PoemContainer';
import ErasureControls from './ErasureControls';

const ErasureSection = ({currentErasure, currentStage}) => {
    const [ stageIndex, setStageIndex] = useState(parseInt(currentStage));
    const [ sliderValue, setSliderValue] = useState(parseInt(currentStage));

    const changeErasure = (inc) => {
        if (currentErasure + inc >= 0 && currentErasure + inc < erasures.items.length) {
          setCurrentErasure(currentErasure + inc);
          setStageIndex(0);
          setSliderValue(0);
        }
    }
    
    const setErasure = ({ id }) => {
        if (id-1 >= 0 && id-1 < erasures.items.length) {
            setCurrentErasure(id-1);
            setStageIndex(0);
            setSliderValue(0);
        }
    }

    return <main className="container">
        <div id="erasurePage" className="row">
        <ErasureControls changeErasure={changeErasure} currentErasure={parseInt(currentErasure.id)} setErasure={setErasure} tags={tags} erasures={erasures}/>
        <PoemContainer erasure={currentErasure}  setStageIndex={setStageIndex} stageIndex={stageIndex} setStageIndex={setStageIndex} sliderValue={sliderValue} setSliderValue={setSliderValue} />
        </div>
    </main>
}

export default ErasureSection;