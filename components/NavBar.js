import styled from 'styled-components';

export default function NavBar() {
    return (<Header>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <div className="navbar-brand">
                    <a href="/"><h2>Highlights&Blackouts</h2></a>
                    <p>A Self-Erasure Series By <a href="/poet">Heather Bowlan</a> & <a href="/developer">Warren C. Longmire</a></p>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/blackouts/1/1">The Poems</a>
                        <a className="nav-link" href="/series">The Series</a>
                        <a className="nav-link" href="/poet">The Poet</a>
                        <a className="nav-link" href="/developer">The Developer</a>
                        <a className="nav-link" href="/contributors">The Contributors</a>
                    </div>
                </div>
            </div>
        </nav>
    </Header>);
}

const Header = styled.header`
    .navbar-brand {
        color: white;
        font-family: 'Rubik Mono One', sans-serif !important;
        h2 {
            padding: 0;
            margin: 0;
        }

        p {
            font-family: 'Sorts Mill Goudy', serif;
            font-size: 0.8em;
            padding: 0;
            margin: 0;
        }
    }

    .navbar-collapse {
        font-family: 'Sorts Mill Goudy', serif;
        flex-flow: row-reverse;
    }

    .navbar-nav .nav-link{
        color:white !important;

        :hover {
            color: black !important;
            background-color: white;
        }
    }

    @media (max-width: 540px){
        .navbar-brand {
            h2 {
                font-size:0.8em
            }

            p {
                font-family: 'Sorts Mill Goudy', serif;
                font-size: 0.6em;
                padding: 0;
                margin: 0;
            }
        }

        .navbar-nav {
            text-align: right;

            .nav-link{
                padding: 10px;
            }
        }

        .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
        }

    }

`