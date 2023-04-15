import erasures from './../../../data/erasures.json';
import ErasureSection from '../../../components/ErasureSection';

export const getStaticPaths = async ()=> {
    const paths = [];
    
    erasures.items.forEach( (erasure, eIdx) => {
        erasure.stages.forEach((stage, sIdx) => {
            paths.push({ params: { erasure: (eIdx + 1).toString(), stage: (sIdx + 1).toString()}})
        })
    });

    return({
        paths,
        fallback: false 
    });
}

export const getStaticProps = async (context) => {
    
    return {
        props: {
            erasureIdx: parseInt(context.params.erasure),
            stageIdx: parseInt(context.params.stage),
        }
    }
}

const StageSelection = ({erasureIdx, stageIdx})=> {
    return <>
        <ErasureSection erasureIdx={parseInt(erasureIdx)} stageIdx={parseInt(stageIdx)}/>
    </>
}

export default StageSelection;