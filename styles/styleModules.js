import styled from 'styled-components';

export const CommonContainer = styled.div`
    main {
        min-height: 100vh;
        padding-top: 6em;
        font-family: 'Sorts Mill Goudy', serif;

        h1 {
            font-size: 1.5em;
            font-weight: bold;
        }
    }
`

export const Footer = styled.div`
    font-family: 'Rubik Mono One', sans-serif !important;
    background-color:black;
    color: white;
    padding: 1em;
`

export const ContributorContainer = styled.div`
    padding: 1em 0 ;
    display:flex;

    .imgContainer {
        flex-basis: 200px;
        img {
            object-fit: cover;
        }
    }
    
    h2 {
        font-size: 1.2em;
        font-weight: bold;
    }

    p {
        font-size: 0.9em;
        padding: 0;
        margin: 0.5em 0;
    }

    .contributorInfo {
        padding: 1em
    }
`