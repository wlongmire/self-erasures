import Link from 'next/link';
import erasures from './../data/erasures.json';

const ErasureStages = ({currentErasure, stages})=> {
    return <>
        {
            stages.map((stage, stageIdx)=> {
                return <>
                    <Link href={`/blackouts/${currentErasure}/${stageIdx+1}`}><a>Stage {stageIdx}: {stage.title}</a></Link>
                    <br/>
                </>
            })
        }
    </>
}

const Home = () => {
    return <>
        <h1>BLACKOUTS AND HIGHLIGHTS</h1>
        <div>
            {
                erasures.items.map((erasure, idx) => {
                    return(<>
                        <hr/>
                        <Link href={`/blackouts/${idx+1}`}><a>BLACKOUT {idx+1}</a></Link>
                        <br/>
                        <ErasureStages currentErasure={idx+1} stages={erasure.stages}/>
                        <hr/>
                    </>)
                })
            }
        </div>
    </>
}

export default Home;