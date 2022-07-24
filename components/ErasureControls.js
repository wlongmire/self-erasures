import MenuCollapse from './menuCollapse';

export default function ErasureControls(props) {
    const {tags, erasures, changeErasure, setErasure, currentErasure} = props;

    return(<div  className="col-2 sidebar">
        <div className="erasureControls">
            <div>
                <a className={(currentErasure <= 0) && "disable"} onClick={()=> changeErasure(-1)} href="#" >Last</a> | <a onClick={()=>changeErasure(1)} className={(currentErasure >= erasures.items.length -1) && "disable"} href="#">Next</a> </div>
            <hr/>
            <MenuCollapse {...tags} title="Tags"/>
            <hr/>
            <MenuCollapse {...erasures} title="Erasures" onClick={setErasure}/>
            <hr/>
        </div>
    </div>);
}