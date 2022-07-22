import { useState } from 'react';
import erasures from './data/erasures.json';
import tags from './/data/tags.json';

import PoemContainer from '../components/poemContainer'
import ErasureControls from '../components/erasureControls'

// const data = {
//   tags: {
//     title:"Tags",
    
//     items:[
//       {name:"Hopeful"},
//       {name:"Sad"},
//       {name:"Spaceships"},
//     ]
//   },
//   erasures: {
//     title:"Table of Erasings",
//     name:"erasureCollapse",
//     items:[
//       {
//         title:"BOX",
//         tags:["hopeful", "sad", "spaceships"],
//         audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//         stages: [
//           {
//             id: 1,
//             title:"Wellness Plan/Mood Episode",
//             date: "Sat Jul 22 2017 13:46:43 GMT-0400",
//             imageSrc: "image.1.1.jpg",
//             imageAttribution: {
//               firstName:"FirstName",
//               lastName:"Lastname"
//             },
//           },
//           {
//             id: 2,
//             title:"Wellness/Episode",
//             date: "Sat Jul 22 2018 13:46:43 GMT-0400",
//             imageSrc: "image.1.2.jpg",
//             imageAttribution: {
//               firstName:"FirstName",
//               lastName:"Lastname"
//             }
//           },
//           {
//             id: 3,
//             title:"BOX",
//             date: "Sat Jul 22 2020 13:46:43 GMT-0400",
//           }
//         ]
//       }
//     ]
//   }
// }


export default function Home() {
  const [ currentErasure, setCurrentErasure] = useState(0);

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