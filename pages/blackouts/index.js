
import styled from 'styled-components';
import { Tree } from 'antd';
const { DirectoryTree } = Tree;

import Link from 'next/link';

import erasures from './../data/erasures.json';
import contributors from './../data/contributions';

const treeData = [
  {
    title: 'The Series',
    type: "header",
    key: '0-0',
    children:[
      {
        title: 'The Writing Process',
        href:"/series",
        type: "link",
        key: '0-0-0'
      },
      {
        title: 'Collaborations',
        href:"/series#collaborations",
        type: "link",
        key: '0-0-1'
      },
      {
        title: 'The Writing Process',
        href:"/series#tech_design",
        type: "link",
        key: '0-0-2'
      }
    ]
  },
  {
    title: 'The Artists',
    type: "header",
    key: '0-1',
    children:[
      {
        title: 'Heather Bowlan',
        href:"/poet",
        type: "link",
        key: '0-1-0'
      },
      {
        title: 'Warren C. Longmire',
        href:"/developer",
        type: "link",
        key: '0-1-1'
      }
    ]
  },
  {
    title: 'The Contributors',
    type: "header",
    key: '0-2',
    children: contributors.map((contrib, id) => ({
      title: `${contrib.first} ${contrib.last}`,
      href: `/contributors#${contrib.first}-${contrib.last}`,
      type: "link",
      key: `0-2-${id}`
    }))
  },
  {
    title: 'The Poems',
    type: "header",
    key: '0-3',
    children: erasures.items.map(item => (
      {
        title: item.title,
        type: "erasureTitle",
        href:`/blackouts/${item.id}`,
        key:`0-3-${item.id}`,
        children: item.stages.map(stage => ({
          title: stage.title,
          type: "poemTitle",
          key:`0-3-${item.id}-${stage.id}`,
          href: `/blackouts/${item.id}/${stage.id}`
        }))
      }
    ))
  }
];

const TreeHeader = styled.h2`
  font-family: 'Sorts Mill Goudy', serif;
  font-size: 3em;
  line-height: 1.5em;
`

const LinkTitle = styled.div`
  font-family: 'Sorts Mill Goudy', serif;
  font-weight: bold;
  font-size: 1.3em;
  line-height: 1.5em;
`

const ErasureTitle = styled.div`
  font-family: 'Sorts Mill Goudy', serif;
  font-weight: bold;
  font-size: 1.3em;
`

const PoemTitle = styled.div` 
  font-family: 'Sorts Mill Goudy', serif;
  font-size: 1.2em;
`

const B = styled.span`
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


const Header = styled.header`
  padding-bottom: 1em;

  span#highlights {
    font-family: 'Rubik Mono One', sans-serif !important;
    font-size: calc(1.525rem + 6.5vw);
    display:inline-block;
    line-height:1.1;
    padding:0;
    margin:0;
  }

  span#blackouts {
    font-family: 'Rubik Mono One', sans-serif !important;
    font-size: calc(1.525rem + 6.5vw);
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

const TreeNode = (props) => {
  const { title, type, href} = props;
  const renderTypes = {
    "header":<TreeHeader>
      {title}
    </TreeHeader>,
    "link":<LinkTitle>
      <Link href={href}>{title}</Link>
    </LinkTitle>,
    "erasureTitle":<ErasureTitle>
      <Link href={href}>{title}</Link>
    </ErasureTitle>,
    "poemTitle":<PoemTitle>
      <Link href={href}>{title}</Link>
    </PoemTitle>
  }
  return renderTypes[type] || <p>{title}</p>
}

const Home = () => {
  return <div>
    <Header>
      <span id="highlights">H<B>IG</B>HLIGHTS</span>
      <span id="blackouts">&BLACK<B>OU</B>TS</span>

      <p>A Self-Erasure Series By <Link href="/poet"><B link>Heather Bowlan</B></Link> & <Link href="/developer"><B link>Warren C. Longmire</B></Link></p>
    </Header>
    <DirectoryTree
      showLine
      autoExpandParent={true}
      switcherIcon={<></>}
      showIcon={false}
      selectable={false}
      treeData={treeData}
      titleRender={(data)=> <TreeNode {...data}/>}
    />
  </div>
}

export default Home;

