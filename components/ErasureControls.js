import MenuCollapse from './menuCollapse';

export default function ErasureControls(props) {
    const {tags, erasures} = props;

    return(<div  className="col-2 sidebar">
        <div className="erasureControls">
            <div><a href="#">Last Erase</a> | <a href="#">Next Erase</a> </div>
            <hr/>
            <MenuCollapse {...tags} title="Tags"/>
            <hr/>
            <MenuCollapse {...erasures} title="Erasures"/>
            <hr/>
        </div>
    </div>);
}