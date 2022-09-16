import { useState } from 'react';
import tags from '../../data/tags.json';
import erasures from '../../data/erasures.json';

import PoemContainer from '../../../components/poemContainer'
import ErasureControls from '../../../components/erasureControls'

export const getStaticPaths = async ()=> {
    const paths = [];

    erasures.items.forEach( (erasure, eIdx) => {
        erasure.stages.map( (stage, sIdx) => {
            paths.push({ params: { erasure: (eIdx + 1).toString(), stage: (sIdx + 1).toString()}})
        })
    });

    
    return({
        paths,
        fallback: false 
    });
}

export const getStaticProps = async (context) => {
    const currentErasure = erasures.items[parseInt(context.params.erasure)-1];

    return {
        props: {
            currentErasure,
            currentStage: parseInt(context.params.stage) - 1,
        }
    }
}



const Poem = ({currentErasure, currentStage}) => {
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
        <PoemContainer erasure={currentErasure} stageIndex={stageIndex} setStageIndex={setStageIndex} sliderValue={sliderValue} setSliderValue={setSliderValue} />
        </div>
    </main>
}

export default Poem;