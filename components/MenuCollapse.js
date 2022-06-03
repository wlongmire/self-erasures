
export default function MenuCollapse({title, items, name}) {

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
                        items.map(item=> (<li><a href="#">{item.name}</a></li>))
                    }
                </ul>
            </div>
        </div>
  </div>);
}