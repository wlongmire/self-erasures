import { useState } from 'react';
import erasures from './data/erasures.json';
import tags from './/data/tags.json';

import PoemContainer from '../components/poemContainer'
import ErasureControls from '../components/erasureControls'

const START_ERASURE = 0;

export default function Home() {
  const [ currentErasure, setCurrentErasure] = useState(START_ERASURE);
  const [ stageIndex, setStageIndex] = useState(0);
  const [ sliderValue, setSliderValue] = useState(0);

  const changeErasure = (inc) => {
    if (currentErasure + inc >= 0 && currentErasure + inc < erasures.items.length) {
      setCurrentErasure(currentErasure + inc);
      setStageIndex(0);
      setSliderValue(0);
    }
  }

  const setErasure = ({id}) => {
    if (id-1 >= 0 && id-1 < erasures.items.length) {
      setCurrentErasure(id-1);
      setStageIndex(0);
      setSliderValue(0);
    }
  }

  return ( <div >
      <main className="container">
        <div id="erasurePage" className="row">
          <ErasureControls changeErasure={changeErasure} currentErasure={currentErasure} setErasure={setErasure} tags={tags} erasures={erasures}/>
          <PoemContainer erasure={erasures.items[currentErasure]} stageIndex={stageIndex} setStageIndex={setStageIndex} sliderValue={sliderValue} setSliderValue={setSliderValue} />
        </div>
      </main>
    </div>
  )
}