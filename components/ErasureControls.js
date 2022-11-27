import Link from 'next/link';

import MenuCollapse from './MenuCollapse';

export default function ErasureControls(props) {
    const {tags, erasures, changeErasure, setErasure, currentErasure} = props;

    return(<div  className="col-2 sidebar">
        <div className="erasureControls">
            <div>
                <Link href={`/blackouts/${currentErasure-1}`}><a className={(currentErasure <= 1) && "disable"}>Last</a></Link> | <Link href={`/blackouts/${currentErasure + 1}`}><a className={(currentErasure >= erasures.items.length-1) && "disable"}>Next</a></Link> </div>
            <hr/>
            <MenuCollapse {...tags} title="Tags"/>
            <hr/>
            <MenuCollapse {...erasures} title="Erasures" onClick={setErasure}/>
            <hr/>
        </div>
    </div>);
}