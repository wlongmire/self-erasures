import erasures from './../../../data/erasures.json';
import ErasureSection from "../../../components/ErasureSection";

export const getStaticPaths = async ()=> {
    const paths = [];

    erasures.items.forEach( (erasure, eIdx) => {
        paths.push({ params: { erasure: (eIdx + 1).toString()}})
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
            stageIdx: 1
        }
    }
}

const ErasureSelector = ({erasureIdx, stageIdx})=> {
    return <>
        <ErasureSection erasureIdx={parseInt(erasureIdx)} stageIdx={parseInt(stageIdx)}/>
    </>
}

export default ErasureSelector;