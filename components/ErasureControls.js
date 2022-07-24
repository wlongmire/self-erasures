import MenuCollapse from './menuCollapse';

export default function ErasureControls(props) {
    const {tags, erasures} = props;

    const handleLastErase = ()=> {}
    const handleNextErase = ()=> {}

    return(<div  className="col-2 sidebar">
        <div className="erasureControls">
            <div><a onClick={handleLastErase}href="#">Last Erase</a> | <a onClick={handleNextErase} href="#">Next Erase</a> </div>
            <hr/>
            <MenuCollapse {...tags} title="Tags"/>
            <hr/>
            <MenuCollapse {...erasures} title="Erasures"/>
            <hr/>
        </div>
    </div>);
}