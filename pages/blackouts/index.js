import erasures from './../../data/erasures.json';
import ErasureSection from './../../components/ErasureSection';
import {useRouter} from 'next/router'

const StageSelection = ()=> {
    const router = useRouter()
    const {poem, stage} = router.query;
    
    if (!poem || !stage)
        return <></>
    
    return <>
        <ErasureSection erasureIdx={parseInt(poem)} stageIdx={parseInt(stage)}/>
    </>
}

export default StageSelection;