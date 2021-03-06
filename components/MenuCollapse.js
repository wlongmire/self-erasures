
export default function MenuCollapse({title, items, name, onClick=()=>{}}) {
    
    return(<div id="tagsCollapseContainer">
        <p>
        <a data-bs-toggle="collapse" href={`#${name}`} role="button" aria-expanded="false" aria-controls={name}>
            {title}
        </a>
        </p>
        <div className="collapse" id={name}>
            <div className="card card-body">
                <ul>
                    {
                        items.map(item=> (<li key={item.title}><a href="#" onClick={()=> onClick(item)}>{item.title}</a></li>))
                    }
                </ul>
            </div>
        </div>
  </div>);
}