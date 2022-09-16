export default function NavBar() {
    return (<nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">Erasings</a>
                <a className="nav-link" href="series">The Series</a>
                <a className="nav-link" href="poet">The Poet</a>
                <a className="nav-link" href="developer">The Developer</a>
                <a className="nav-link" href="contributors">The Contributors</a>
            </div>
        </div>

        <a className="navbar-brand" href="#">
            <h2>Highlights And Blackouts</h2>
            <p>by Heather Bowlan</p>
        </a>
        </div>
    </nav>);
}