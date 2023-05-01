import { useState } from 'react';
import tags from './../data/tags.json';
import { useRouter } from 'next/router'
import PoemContainer from './PoemContainer';
import erasures from './../data/erasures.json';


const ErasureSection = ({erasureIdx, stageIdx}) => {
    let router= useRouter()

    const incPoem = (erasureInc = 0, stageInc = 0) => {
        setPoem(erasureIdx + erasureInc, stageIdx + stageInc)
    }

    const setPoem = (erasureValue, stageValue) => {
        if (erasureValue && stageValue) {
            erasureValue = (erasureValue <= 1) ? 1 : erasureValue
            erasureValue = (erasureValue >= erasures.length)?erasures.length:erasureValue
            
            stageValue = (stageValue <= 1) ? 1 : stageValue
            stageValue = (stageValue >= erasures.items[erasureValue-1].stages.length) ? erasures.items[erasureValue-1].stages.length:stageValue

            router.push(`/blackouts/${erasureValue}/${stageValue}`)
        }
    }

    return <div>
        {/* <PoemContainer erasureIdx={erasureIdx}  stageIdx={stageIdx} incPoem={incPoem}  setPoem={setPoem}/> */}
    </div>
}

export default ErasureSection;