import styled from 'styled-components';

export const TreeHeader = styled.h2`
  font-family: 'Sorts Mill Goudy', serif;
  font-size: 2em;
  line-height: 1.5em;
`

export const LinkTitle = styled.div`
  font-family: 'Sorts Mill Goudy', serif;
  font-weight: bold;
  font-size: 1.1em;
  line-height: 1.5em;
  line-height: 5em;
`

export const ErasureTitle = styled.div`
  font-family: 'Sorts Mill Goudy', serif;
  font-weight: bold;
  font-size: 1.3em;
  line-height: 5em;
`

export const PoemTitle = styled.div` 
  font-family: 'Sorts Mill Goudy', serif;
  font-size: 1.1em;
  line-height: 5em;
  width: 100%;
  margin: -10px;
  display: flex;
  justify-content: space-between;
`

export const B = styled.span`
  color:black;
  background:black;
  transition: background-color 500ms;
  cursor: ${props => props.link? 'pointer':'inherit'};

  &:hover {
    color:black !important;
    background:white;
    text-decoration: ${props => props.link? 'underline':'inherit'};;
  }
`

export const TreeCardGroup = styled.div`
    display:flex;
    flex-flow: row nowrap;
    width: 100%;
`

export const TreeCard = styled.div`
    flex-grow:1;
`

export const Header = styled.header`
  padding: 3em;
  text-align: center;

  span#highlights, span#blackouts {
    font-family: 'Rubik Mono One', sans-serif !important;
    font-size: calc(1rem + 6.5vw);;
    display:inline-block;
    line-height:1.1;
    padding:0;
    margin:0;
  }

  p {
    font-family: 'Sorts Mill Goudy', serif;
    text-align:center;
    font-size: calc(0.5rem + 0.8vw);
    padding-top: 1em;
  }

  @media only screen and (max-width : 1200px) {
    padding: 1em 0 ;

    span#highlights, span#blackouts {
      font-size: calc(1rem + 5.1vw);
    }
  }

  @media only screen and (max-width : 800px) {
    padding: 1em 0 ;

    span#highlights, span#blackouts {
      font-family: 'Rubik Mono One', sans-serif !important;
      font-size: calc(1.525rem + 4vw);
      display:inline-block;
      line-height:1.1;
      padding:0;
      margin:0;
    }
  }
`