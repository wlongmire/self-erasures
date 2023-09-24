import { useState } from 'react'

import { TreeHeader, LinkTitle, ErasureTitle, PoemTitle, B, BlockErase, TreeCardGroup, TreeCard, Header} from './../styles/styleHome'
import { PoemButton } from './../styles/styleModules';

import { Tree } from 'antd';
import { Collapse } from 'antd';
import { Layout } from "antd";

import { useRouter } from 'next/router';

const { Panel } = Collapse;
const { DirectoryTree } = Tree;

import Link from 'next/link';

import erasures from '../data/erasures.json';
import contributors from '../data/contributions';
import { treeData } from '../data/navigation';

const TreeNode = (props) => {
  const { title, type, href, poem_id, stage_id, season } = props;
  
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
      
      <span className="season"><em>{season}</em></span> 
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

  const contrib_groups = generateGroups(contributors.length, contributors.filter(c => c.blurb), (c, g_idx, idx)=> ({
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
      href:`/blackouts?poem=${c.id}&stage=1`,
      key:`0-3-${c.id}`,
      children: c.stages.map(stage => ({
        title: stage.title,
        poem_id: c.id,
        stage_id: stage.id,
        season: stage.season,
        type: "poemTitle",
        key:`0-3-${c.id}-${stage.id}`,
        href: `/blackouts?poem=${c.id}&stage=${stage.id}`
      }))
    })
  )

  let router= useRouter()

  const [showHeading, setShowHeading] = useState(false)


  return <div>
    <Layout>
      <div>
        <Header className="homeHeader">
          
          <span id="highlights">H<B>I</B>GH<B>L</B>IGHTS</span>
          <span id="blackouts">&B<B>L</B>ACKO<B>U</B>TS</span>
          <p>A Self-Erasure Series By <Link href="/poet"><span className="highlight">Heather Bowlan</span></Link> & <Link href="/developer"><span className="highlight">Warren C. Longmire</span></Link></p>

          <p className="description text-start mx-5 mb-4">Experience <B>memory, art, and selfhood in</B> process. <B>This collection of</B> poems, <B>written over a 15-year period and paired with</B> erasures <B>completed years later, interrogates experience and aesthetics with the help of</B> music, images, and videos <B>by the author and a wide circle of artists and friends.</B></p>
          
        </Header>

        
        <Collapse accordion ghost>
          <Panel header="The Experience" key="1">
              <div className="basics">
                <p>HIGHLIGHTS & BLACKOUTS is a chapbook and code poem experience written by Heather Bowlan, developed by Warren C. Longmire, with contributions by a wide range of artists and poets.</p>
                <hr/>
                <iframe width="100%" height="500px" src="https://www.youtube.com/embed/JWvP4rpCg6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <hr/>               
                <p>To start, <a href="#poems">select a poem from below.</a></p>
                <p>Each poem is separated into stages erased with time and reflection. Note that each poem stage may have multiple pages that can be swiped between.</p>
                <p>If you're viewing on mobile, look for the blue image icon in the top right to switch between the media and the accompanying text.</p>
                <hr/>
                <div className="d-flex">
                  <div className="p-2 d-flex justify-content-center">
                    <img height="250px" src="/images/cover.png"/>
                  </div>
                  
                  <div className="p-2 d-flex flex-column justify-content-center">
                    <p>Please support the artists by spreading the word on our <BlockErase><a target="_blank" href="https://www.amazon.com/dp/B0C9SBVQ29">accompanying chapbook.</a></BlockErase></p>
                    <p>For more performances, print and web experiences working at the intersection of tech, music and literature, please visit <BlockErase><a target="_blank" href="https://www.mixlit.io/">_mixlit.io</a></BlockErase></p>
                  </div>
                </div>
                <hr/>                
              </div>
          </Panel>

          <Panel id="poems" header="The Poems" key="2">
            <TreeCardGroup>
              {
                  poem_groups.map((group) => <TreeCard width={`${String(100)}%`}>
                    <DirectoryTree
                      showLine
                      key={group.poem_id}
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

            <Panel header="The Series" key="3">
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

            <Panel header="The Artists" key="4">
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

            <Panel header="The Contributors" key="5">
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
            }} header="The Playlist" key="6"></Panel>
            
        </Collapse>
      </div>
  
    </Layout>
  </div>
}

export default home

