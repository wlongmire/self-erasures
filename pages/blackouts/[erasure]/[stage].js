import erasures from './../../../data/erasures.json';
import ErasureSection from '../../../components/ErasureSection';

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

const StageSelection = ({currentErasure, currentStage}) => {
    return <ErasureSection currentErasure={currentErasure} currentStage={currentStage} />
}

export default StageSelection;