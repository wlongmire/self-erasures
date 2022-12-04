import erasures from '../../data/erasures.json';
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
    const currentErasure = erasures.items[parseInt(context.params.erasure)-1];

    return {
        props: {
            currentErasure
        }
    }
}

const ErasureSelector = ({currentErasure})=> {
  return <>
    <ErasureSection currentErasure={currentErasure} currentStage={0}/>
  </>
}

export default ErasureSelector;