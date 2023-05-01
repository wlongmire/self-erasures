import erasures from './../../../data/erasures.json';
import ErasureSection from "../../../components/ErasureSection";

export const getStaticPaths = async ()=> {
    const paths = [];

    erasures.items.forEach( (erasure, eIdx) => {
        paths.push({ params: { erasure: (eIdx + 1).toString(), stage: 1}})
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

const ErasureSelector = ({erasureIdx, stageIdx})=> {
    // const currentErasure = erasures.items[parseInt(context.params.erasure)-1];
    // const currentStage = erasures.items[parseInt(context.params.erasure)-1].stages[parseInt(context.params.stage)-1];

    return <>
        <ErasureSection erasureIdx={parseInt(erasureIdx)} stageIdx={parseInt(stageIdx)}/>
    </>
}

export default ErasureSelector;