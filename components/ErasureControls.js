import MenuCollapse from './MenuCollapse';

export default function ErasureControls(props) {
    const {tags, erasures} = props;

    return(<div className="erasureControls">
        <div><a href="#">Last Erase</a> | <a href="#">Next Erase</a> </div>
        <MenuCollapse {...tags}/>
        <MenuCollapse {...erasures}/>
    </div>);
}