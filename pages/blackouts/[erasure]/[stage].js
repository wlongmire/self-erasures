import erasures from '../../data/erasures.json';

export const getStaticPaths =async ()=> {
    const paths = [];

    erasures.items.forEach( erasure => {
        erasure.stages.map(stage => {
            paths.push({ params: { erasure: erasure.id.toString(), stage: stage.id.toString()}})
        })
    });

    
    return({
        paths,
        fallback: false 
    });
}

export const getStaticProps = async (context) => {
    const currentErasure =  erasures.items.filter(erasure => erasure.id.toString() === context.params.erasure)[0];
    const currentStage = currentErasure.stages.filter(stage => stage.id.toString() === context.params.stage)[0]
    return {
        props: {
            erasure: currentErasure,
            stage: currentStage,
        }
    }
}

const Poem = ({erasure, stage}) => {
    
    return <>
        <h1>Poem {erasure.title} Section {stage.id}: Stage Title: {stage.title}</h1>
    </>
}

export default Poem;