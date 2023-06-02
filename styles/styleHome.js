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
  font-size: 1.1em;
  line-height: 5em;
`

export const PoemTitle = styled.div` 
  font-family: 'Sorts Mill Goudy', serif;
  font-size: 1em;
  line-height: 3em;
  width: 100%;
  padding: 0 0.25em;
  display: flex;
  justify-content: space-between;

  &.activePoem {
    background-color:#FDFF05;
  }
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

export const BlockErase = styled.span`
  color:black;
  background:black;
  margin: 5px 0;
  padding: 5px;
  transition: background-color 500ms;
  font-size: 1em;
  cursor: pointer;

  &.first-child {
    padding: 5px 5px 5px 0;
  }

  &:hover {
    color:black !important;
    background:white;
    text-decoration: none;
  }
`

export const ContentBlock = styled.div`
    border-left: 2px solid black;
`

export const TreeCardGroup = styled.div`
    display:flex;
    flex-flow: row nowrap;
    width: 100%;

    &.active-poem {
      background-color:#FDFF05;
    }
`

export const TreeCard = styled.div`
    flex-grow:1;
`

export const Header = styled.header`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

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
`

export const NavHeader = styled.header`
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

    .ant-space-item {
        font-family: 'Sorts Mill Goudy', serif !important;
        font-size: 16px;
    }

    .ant-dropdown-menu {
        border-radius:0;
        font-family: 'Sorts Mill Goudy', serif !important;
    }
    
    .poems {
        border: #ffffff47 1px solid;
        box-sizing: border-box;
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

    @media (max-width:700px) {
      .navbar-brand{
        h2 {
            font-size: 0.8em;
        }

        p {
            display:none;
            font-family: 'Sorts Mill Goudy', serif;
            font-size: 0.5em;
        }
      }

      .nav-link {
        display:flex;
        justify-content:center;
        align-items:center;
      }
  }
`