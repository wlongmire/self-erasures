import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function NavBar() {
    const router = useRouter();

    return (<Header>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark">
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
                        <Link href="/blackouts/1/1"><a className={router.pathname.includes("blackouts") ? "nav-link active" : "nav-link"}  aria-current="page">The Poems</a></Link>
                        <Link href="/series"><a className={router.pathname == "/series" ? "nav-link active" : "nav-link"} href="/series">The Series</a></Link>
                        <Link href="/poet"><a className={router.pathname == "/poet" ? "nav-link active" : "nav-link"} href="/">The Poet</a></Link>
                        <Link href="/developer"><a className={router.pathname == "/developer" ? "nav-link active" : "nav-link"} href="/developer">The Developer</a></Link>
                        <Link href="/contributors"><a className={router.pathname == "/contributors" ? "nav-link active" : "nav-link"} href="/contributors">The Contributors</a></Link>
                        <Link href="/playlist"><a className={router.pathname == "/playlist" ? "nav-link active" : "nav-link"} href="/playlist">The Playlist</a></Link>
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
            font-size: 1.2em;
            padding: 0;
            margin: 0;
        }

        p {
            font-family: 'Sorts Mill Goudy', serif;
            font-size: 0.6em;
            padding: 0;
            margin: 0;
        }
    }

    .navbar-collapse {
        font-family: 'Sorts Mill Goudy', serif;
        flex-flow: row-reverse;
    }

    .navbar-nav .nav-link{
        color:grey;

        &.active {
            color: white;
        }

        :hover {
            color: black;
            background-color: white;

            &.active {
                
            }
        }
    }

    
    @media (max-width: 540px){
        .navbar-brand {
            h2 {
                font-size:0.8em
            }

            p {
                font-family: 'Sorts Mill Goudy', serif;
                font-size: 0.5em;
                padding: 0;
                margin: 0;
            }
        }
    }

`