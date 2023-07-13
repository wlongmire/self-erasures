import styled from 'styled-components';

export const LayoutStyle = styled.div`
    display: flex;
    flex-direction: column;
    max-width:100vw;
`

export const CommonContainer = styled.div`
    display:flex;
    min-height:100vh;
    padding-top: 4rem;
    
    main {
        font-family: 'Sorts Mill Goudy', serif;

        h1 {
            font-size: 1.5em;
            font-weight: bold;
        }
    }
`
export const CollageFrame = styled.div`
    background: ${(props) => `url('https://images.squarespace-cdn.com/content/${props.image}?format=1500w')`};
    background-size: auto;
    background-position: ${(props) => `${props.position}% 0`};
    width: 30vw;
`

export const Footer = styled.div`
    font-family: 'Rubik Mono One', sans-serif !important;
    background-color:black;
    color: white;
    padding: 1em;
    

    .container {
        display:flex;
        justify-content: space-between;

        .publisher {
            font-family: 'Sorts Mill Goudy', serif;
        }

        #footerTitle {
            color: #EDD776;
        }
    }
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
        font-size: 1.4em;
        font-weight: bold;
    }

    p {
        font-size: 0.9em;
        padding: 0;
        margin: 0.5em 0;
    }

    .contributorInfo {
        padding: 1em;
        border: black 2px double;
        width: 100%;
        &.active {
            background: #eeeeee;
        }
    }
`


export const PoemIndex = styled.div`
    font-family: 'Sorts Mill Goudy', serif;
    padding:0;
    margin:0;
    margin-bottom: 0.5em;
    font-size: 1.3em;
`

export const PoemButton = styled.button`
    flex:1;
    font-size: 1.1em;
    border-radius: 8px;
    border-width: 1px;

    &:hover {
        border-color: white;
        background: #F6D54C;
        color:black;
    }
`
export const PoemButtonPhone = styled.button`
    flex:1;

    font-size: 0.9em;
    border-radius: 8px;
    border-width: 1px;

    h5 {
        font-size: 1.3em;
    }

    &:hover {
        border-color: white;
        background: #F6D54C;
        color:black;
    }
`

export const ArrowContainer = styled.div`
    display:flex;
    align-items:center;

    .inactive {
        cursor: default !important;
        color:#dddddd !important;
    }
`

export const SwitchButtonContainer = styled.div`
    display:flex;
    font-size:2.5em;
    min-width:2em;
    background: #2258CA;
    padding: 10px;
    border-radius: 5px;
    color:white;
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
        background: #AADAFA;
    }
`

export const SwitchButtonContainerInactive = styled.div`
    display:flex;
    font-size:2.5em;
    min-width:2em;
    justify-content: center;
    background: grey;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    color:white;
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
`

export const PoemStyle = styled.div`
    font-family: 'Sorts Mill Goudy', serif;
    margin-top: 2em;
    width: 100%;
    
    .slick-track {
        height:500px !important;
    }

    h4 {
        padding-left: 15px;
    }
    
    h1 {
        font-family: 'Rubik Mono One', sans-serif !important;
        padding-left: 15px
    }

    .active_stage {
        color: white;
        background-color: black;
    }

    .image_contributor {
        position: relative;
        top: -3em;
        left: 1em;
        opacity: 0.3;
        font-family: 'Sorts Mill Goudy', serif;
        transition: all 0.5s ease-in-out;
    }

    .image_contributor:hover {
        opacity: 1;
    }

    .image_contributor a {
        color: white;
        background:black;
        padding: 3px;
        transition: all 0.5s ease-in-out;
        
        &:hover {
            color: black;
            background:#F6D54C;
        }
    }

    .slick-dots li button{
        background-color: grey;
    }

    .slick-dots li.slick-active button{
        background: black;
    }

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin:0;
        padding-bottom:1em;
    }

    .footer {
        display: flex;
        z-index: 100;
        justify-content: center;
        align-items: stretch;
        flex:1
        height:140px;
        gap: 1em;
        padding: 2em 0;
    }

    .poemScrub {
        font-size:5em;
        color: black;
        transition: all 0.2s ease-in-out;
    }

    .poemScrub:hover {
        font-size:5em;
        color: #F6D54C;
    }

    .imageCarousel {
        width: 500px;
    }

    .arrow {
        padding: 0 2px;
        cursor: pointer;
    }

    .poemContainer {
        display:flex;
        justify-content: center;
        max-height: 500px;

        .poemImage {
            height:500px !important;
            width:500px !important;
            padding: 0;
            border: 0;
            margin: 0 !important;
            min-height: 0 !important;
            max-height: 0;
        }

        .sideImageTitle {
            position: relative;
            word-wrap: break-word;
            top: ${(props) => (props.titlePosition) ? props.titlePosition : -9.5}em;
            color: ${(props) => (props.titleColor) ? props.titleColor : "white"};
            font-size: 4em;
            width: 500px;
            opacity: ${(props) => (props.titleAlpha) ? props.titleAlpha : 0.5};
        }
    }
`

export const PoemStylePhone = styled.div`
    font-family: 'Sorts Mill Goudy', serif;

    #header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        

        #titleContainer {
            display:flex;
            direction:row;
            width:100%;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 0 1rem;

            h1 {
                font-family: 'Sorts Mill Goudy', serif !important;
                margin:0;
                font-size: 1rem;
                width: fit-content;
                padding: 5px;
                margin-bottom: 5px;
                background: #F6D54D;
                border-radius: 3px;
            }

            h2 {
                font-family: 'Sorts Mill Goudy', serif !important;
                font-size: 1.3rem;
            }
        }
    }


    h4 {
        padding-left: 15px;
    }
    
    h1 {
        font-family: 'Rubik Mono One', sans-serif !important;
        padding-left: 15px
    }

    .active_stage {
        color: white;
        background-color: black;
    }

    .image_contributor {
        position: relative;
        top: -3em;
        left: 1em;
        opacity: 0.3;
        font-family: 'Sorts Mill Goudy', serif;
        transition: all 0.5s ease-in-out;
    }

    .image_contributor:hover {
        opacity: 1;
    }

    .image_contributor a {
        color: white;
        background:black;
        padding: 3px;
        transition: all 0.5s ease-in-out;
        
        &:hover {
            color: black;
            background:#F6D54C;
        }
    }

    .slick-dots li button{
        background-color: grey;
    }

    .slick-dots li.slick-active button{
        background: black;
    }

    .header {
        display: flex;
        justify-content: end;
        align-items: center;
        margin:0;
    }

    .footer {
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex:1
        height:140px;
        gap: 1em;
        padding: 1em 0;
    }

    .poemScrub {
        font-size:5em;
        color: black;
        transition: all 0.2s ease-in-out;
    }

    .poemScrub:hover {
        font-size:5em;
        color: #F6D54C;
    }

    .imageCarousel {
        width:500px;
        height:500px;
    }

    .arrow {
        padding: 0 2px;
        cursor: pointer;
    }

    .poemContainer {
        display:flex;
        max-height: 500px;

        .poemImage {
            height:500px !important;
            width:500px !important;
            padding: 0;
            border: 0;
            margin: 0 !important;
            min-height: 0 !important;
            max-height: 0;
        }

        .sideImageTitle {
            position: relative;
            word-wrap: break-word;
            top: ${(props) => (props.titlePosition) ? props.titlePosition : -9.5}em;
            color: ${(props) => (props.titleColor) ? props.titleColor : "white"};
            font-size: 4em;
            width: 500px;
            opacity: 0.5;
        }
    }
`

