import { useState } from 'react';
import erasures from './data/erasures.json';
import tags from './/data/tags.json';

import PoemContainer from '../components/poemContainer'
import ErasureControls from '../components/erasureControls'

const START_ERASURE = 2;

export default function Home() {
  const [ currentErasure, setCurrentErasure] = useState(START_ERASURE);

  const changeErasure = (inc) => {
    setCurrentErasure(currentErasure + inc);
  }

  return ( <div >
      <main className="container">
        <div id="erasurePage" className="row">
          <ErasureControls changeErasure={changeErasure} tags={tags} erasures={erasures}/>
          <PoemContainer erasure={erasures.items[currentErasure]}/>
        </div>
      </main>
    </div>
  )
}