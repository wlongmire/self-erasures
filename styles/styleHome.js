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
    background-color:rgb(0,0,0,0.3);
    color:#F6D54C;
  }
`

export const B = styled.span`
  color:black;
  background:black;
  transition: background-color 0.5s;
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
  transition: background-color 0.5s;
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
    background: #F6D54C;

    &.active-poem {
      background-color: black
    }
`
export const TreeCardGroupDrawer = styled.div`
    display:flex;
    flex-flow: row nowrap;
    width: 100%;
    background: #F6D54C;

    
    .ant-tree, .ant-tree-list, .ant-tree-switcher, .ant-tree-indent{
      background: #F6D54C !important;
    }  
  
    &.active-poem {
      background-color: black
    }
`

export const TreeCard = styled.div`
    flex-grow:1;
    background: none;
`

export const Header = styled.header`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  span#highlights, span#blackouts {
    font-family: 'Rubik Mono One', sans-serif !important;
    font-size: clamp(1rem, calc(1rem + 6.5vw), 3rem);
    display:inline-block;
    line-height:1.1;
    padding:0;
    margin:0;
  }

  p {
    font-family: 'Sorts Mill Goudy', serif;
    text-align:center;
    font-size: clamp(0.5rem, calc(0.5rem + 0.8vw), 2rem);
    padding-top: 1em;
    margin: 0px;
  }

  .blackout {
    padding: 0 2px;
    background: black;
    color: black;
    cursor: pointer;
    transition: background 0.5s;
  }

  .blackout:hover {
    text-decoration: underline;
    background: white;
    color: black;
  }

  .highlight {
    padding: 0 5px;
    background: #F1D665;
    color: black;
    cursor: pointer;
    text-decoration none;
    transition: text-decoration 0.5s;
  }

  .highlight:hover {
    text-decoration: underline;
    color: black;
  }

  .subheading-link {
    text-decoration: underline;
    color:black
  }

  .subheading-link:hover {
    background: white;
    text-decoration: none;
  }
  
  .subheading-text {
    text-align: left;
    margin: 0 2rem;
    padding:5px;
    display:block;
    opacity:0;
    font-size:0;
    transition: all 0.5s;

    &.display {
      display:block;
      opacity:1;
      font-size:1.2em;
    }
  }
`

export const NavHeader = styled.header`
    .navbar-brand {
        color: #F6D54C;
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
        border-radius: 3px;
        border: #F1D66599 2px solid;
        box-sizing: border-box;
    }

    .navbar-nav .nav-link{
        color:grey;
        margin: 2px; 
        border-radius: 3px;

        &.active {
            color: #F6D54C;
        }

        :hover {
            color: black;
            background-color: #F6D54C;
            

            &.active {
              background-color: #F6D54C;
              color:black;
            }
        }
    }

    @media (max-width:1000px) {
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
        padding-left: 1em;
      }
  }
`