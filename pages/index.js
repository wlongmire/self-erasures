import styled from 'styled-components';
import { Tree } from 'antd';
import { Collapse } from 'antd';
import {Layout} from "antd";

const { Panel } = Collapse;
const { DirectoryTree } = Tree;

import Link from 'next/link';

import erasures from './data/erasures.json';
import contributors from './data/contributions';

const treeData = {
  series:[
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
  ],
  artists:[
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
  ],
  contributors:contributors.map((contrib, id) => ({
    title: `${contrib.first} ${contrib.last}`,
    href: `/contributors#${contrib.first}-${contrib.last}`,
    type: "link",
    key: `0-2-${id}`
  })),
  poems:[]
}

const TreeHeader = styled.h2`
  font-family: 'Sorts Mill Goudy', serif;
  font-size: 2em;
  line-height: 1.5em;
`

const LinkTitle = styled.div`
  font-family: 'Sorts Mill Goudy', serif;
  font-weight: bold;
  font-size: 1.1em;
  line-height: 1.5em;
  line-height: 5em;
`

const ErasureTitle = styled.div`
  font-family: 'Sorts Mill Goudy', serif;
  font-weight: bold;
  font-size: 1.3em;
  line-height: 5em;
`

const PoemTitle = styled.div` 
  font-family: 'Sorts Mill Goudy', serif;
  font-size: 1.1em;
  line-height: 5em;
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

const TreeCardGroup = styled.div`
    display:flex;
`

const TreeCard = styled.div`
    flex-grow:1;
`

const Header = styled.header`
  padding: 3em;
  text-align: center;

  span#highlights, span#blackouts {
    font-family: 'Rubik Mono One', sans-serif !important;
    font-size: calc(1.525rem + 8vw);
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
      font-size: calc(1rem + 7vw);
    }
  }

  @media only screen and (max-width : 800px) {
    padding: 1em 0 ;

    span#highlights, span#blackouts {
      font-family: 'Rubik Mono One', sans-serif !important;
      font-size: calc(1.525rem + 6vw);
      display:inline-block;
      line-height:1.1;
      padding:0;
      margin:0;
    }
  }
`

const TreeNode = (props) => {
  const { title, type, href} = props;
  const renderTypes = {
    "header":<TreeHeader>
      {title}
    </TreeHeader>,
    "link":<LinkTitle><Link href={href}><span>0-{title}</span></Link></LinkTitle>,
    "erasureTitle":<ErasureTitle>
      <Link href={href}>0 - </Link>{title}
    </ErasureTitle>,
    "poemTitle":<PoemTitle>
      <Link href={href}><span>0 - {title}</span></Link>
    </PoemTitle>
  }
  return renderTypes[type] || <p>{title}</p>
}

const home = () => {
  const generateGroups = (numCards, content, bundleFn) => {
    const groups = []
    let g_idx = 0

    content.forEach((c, idx)=> {
      g_idx = Math.floor(idx / numCards)
      if (!groups[g_idx])
        groups.push([])
  
      groups[g_idx].push(bundleFn(c, g_idx, idx))
    })

    return groups
  }

  const contrib_groups = generateGroups(5, contributors, (c, g_idx, idx)=> ({
      title: `${c.first} ${c.last}`,
      href: `/contributors#${c.first}-${c.last}`,
      type: "link",
      key: `0-2-${g_idx}-${idx}`
    })
  )

  const poem_groups = generateGroups(2, erasures.items, (c, g_idx, idx)=> ({
      title: c.title,
      type: "erasureTitle",
      href:`/blackouts/${c.id}`,
      key:`0-3-${c.id}`,
      children: c.stages.map(stage => ({
        title: stage.title,
        type: "poemTitle",
        key:`0-3-${c.id}-${stage.id}`,
        href: `/blackouts/${c.id}/${stage.id}`
      }))
    })
  )

  return <div>
    <Layout>
      <Header>
        <span id="highlights">H<B>IG</B>HLIGHTS</span>
        <span id="blackouts">&BLACK<B>OU</B>TS</span>

        <p>A Self-Erasure Series By <Link href="/poet"><B link>Heather Bowlan</B></Link> & <Link href="/developer"><B link>Warren C. Longmire</B></Link></p>
      </Header>
      <Collapse ghost>
        <Panel header="Series" key="1">
          <DirectoryTree
            showLine
            autoExpandParent={true}
            switcherIcon={<></>}
            showIcon={false}
            selectable={false}
            treeData={treeData.series}
            blockNode={true}
            titleRender={(data)=> <TreeNode {...data}/>}
          />
        </Panel>
        <Panel header="The Artists" key="2">
          <DirectoryTree
            showLine
            autoExpandParent={true}
            switcherIcon={<></>}
            showIcon={false}
            selectable={false}
            treeData={treeData.artists}
            titleRender={(data)=> <TreeNode {...data}/>}
          />
        </Panel>
        <Panel header="The Contributors" key="3">
          <TreeCardGroup>
            {
              contrib_groups.map(group => <div>
                <TreeCard>
                    <DirectoryTree
                    showLine
                    autoExpandParent={true}
                    switcherIcon={<></>}
                    showIcon={false}
                    selectable={false}
                    treeData={group}
                    titleRender={(data)=> <TreeNode {...data}/>}
                    />
                </TreeCard>
              </div>)
            }
          </TreeCardGroup>
        </Panel>
        <Panel header="The Poems" key="4">
            <TreeCardGroup>
            {
                poem_groups.map(group => <div>
                  <DirectoryTree
                    showLine
                    autoExpandParent={true}
                    switcherIcon={<></>}
                    showIcon={false}
                    selectable={false}
                    treeData={group}
                    titleRender={(data)=> <TreeNode {...data}/>}
                  />      
                </div>)
              }
            </TreeCardGroup>
        </Panel>
      </Collapse>
    </Layout>
  </div>
}

export default home