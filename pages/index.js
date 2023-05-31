import { TreeHeader, LinkTitle, ErasureTitle, PoemTitle, B,  TreeCardGroup, TreeCard, Header} from './../styles/styleHome'

import { Tree } from 'antd';
import { Collapse } from 'antd';
import { Layout } from "antd";
import { useRouter } from 'next/router'
const { Panel } = Collapse;
const { DirectoryTree } = Tree;

import Link from 'next/link';

import erasures from '../data/erasures.json';
import contributors from '../data/contributions';
import { treeData } from '../data/navigation';

const TreeNode = (props) => {
  const { title, type, href, poem_id, stage_id, season }= props;
  
  const renderTypes = {
    "header":<TreeHeader>
      {title}
    </TreeHeader>,
    "link":<LinkTitle><Link href={href}><span>0-{title}</span></Link></LinkTitle>,
    "erasureTitle":<ErasureTitle>
      {poem_id} | {title}
    </ErasureTitle>,
    "poemTitle":<PoemTitle onClick={()=> {
      if (stage_id) {
          window.location = href
      }}}>
      
      <span>{poem_id} | {stage_id} | {title} </span>
      
      <span><em>{season}</em></span> 
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

  const contrib_groups = generateGroups(contributors.length, contributors, (c, g_idx, idx)=> ({
      title: `${c.first} ${c.last}`,
      href: `/contributors#${c.first}-${c.last}`,
      type: "link",
      key: `0-2-${g_idx}-${idx}`
    })
  )

  const poem_groups = generateGroups(erasures.items.length, erasures.items, (c, g_idx, idx)=> ({
      title: c.title,
      poem_id: c.id,
      type: "erasureTitle",
      href:`/blackouts/${c.id}`,
      key:`0-3-${c.id}`,
      children: c.stages.map(stage => ({
        title: stage.title,
        poem_id: c.id,
        stage_id: stage.id,
        season: stage.season,
        type: "poemTitle",
        key:`0-3-${c.id}-${stage.id}`,
        href: `/blackouts/${c.id}/${stage.id}`
      }))
    })
  )

  let router= useRouter()

  return <div>
    <Layout>
      <Header>
        <span id="highlights">H<B>I</B>GH<B>L</B>IGHTS</span>
        <span id="blackouts">&B<B>L</B>ACKO<B>U</B>TS</span>
        <p>A Self-Erasure Series By <Link href="/poet"><B link>Heather Bowlan</B></Link> & <Link href="/developer"><B link>Warren C. Longmire</B></Link></p>
      </Header>

      <Collapse ghost>
        <Panel header="The Poems" key="1">
              <TreeCardGroup>
              {
                  poem_groups.map((group) => <TreeCard width={`${String(100)}%`}>
                    <DirectoryTree
                      showLine
                      width={"100%"}
                      autoExpandParent={true}
                      switcherIcon={<></>}
                      showIcon={false}
                      selectable={false}
                      treeData={group}
                      titleRender={(data)=> <TreeNode {...data} group={group}/>}
                    />      
                  </TreeCard>)
                }
              </TreeCardGroup>
          </Panel>

          <Panel header="The Series" key="2">
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

          <Panel header="The Artists" key="3">
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

          <Panel header="The Contributors" key="4">
            <TreeCardGroup>
              {
                contrib_groups.map((group,index) => <TreeCard key={group.id} width={`${String(100/contrib_groups.length)}%`}>
                  <DirectoryTree
                    showLine
                    autoExpandParent={true}
                    switcherIcon={<></>}
                    showIcon={false}
                    selectable={false}
                    treeData={group}
                    titleRender={(data)=> <TreeNode {...data} index={index}/>}
                  />
                </TreeCard>)
              }
            </TreeCardGroup>
          </Panel>

          <Panel onClick={()=> {
            router.push(`/playlist`)
          }} header="The Playlist" key="5"></Panel>
          
      </Collapse>
    </Layout>
  </div>
}

export default home

