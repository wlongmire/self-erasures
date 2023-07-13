import { useState } from 'react'

import { TreeHeader, LinkTitle, ErasureTitle, PoemTitle, B,  TreeCardGroup, TreeCard, Header} from './../styles/styleHome'
import { PoemButton, CollageFrameMobile } from './../styles/styleModules';

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

  const images = [
    "v1/574f88123c44d86f06c2bc65/1683213529929-ECXBOTGRRZCJAQ6O0V58/Bowlan+Precarious+Survival+1.jpg",
    "v1/574f88123c44d86f06c2bc65/1683213529848-U36IANXJ8JCXXF0GLJNN/Bowlan+Precarious+Survival+2.jpg",
    "v1/574f88123c44d86f06c2bc65/1683213528326-6XGQ3Q9EQ1L5I9YO8RKI/Bowlan+Precarious+Survival+3.jpg",
    "v1/574f88123c44d86f06c2bc65/1683213528374-B0MBQBHUQ3X09D8AU587/Bowlan+Precarious+Survival+4.jpg"
  ]


  return <div>
    <Layout>
      <div>
        <CollageFrameMobile height={150} image={images[2]} position={Math.floor(Math.random()*100)} className="collageFrameMobile"/>
        
        <Header className="homeHeader">
          
          <span id="highlights">H<B>I</B>GH<B>L</B>IGHTS</span>
          <span id="blackouts">&B<B>L</B>ACKO<B>U</B>TS</span>
          <p>A Self-Erasure Series By <Link href="/poet"><span className="highlight">Heather Bowlan</span></Link> & <Link href="/developer"><span className="highlight">Warren C. Longmire</span></Link></p>

          <p className="description text-start mx-5 mb-4">Experience <B>memory, art, and selfhood in</B> process. <B>This collection of</B> poems, <B>written over a 15-year period and paired with</B> erasures <B>completed years later, interrogates experience and aesthetics with the help of</B> music, images, and videos <B>by the author and a wide circle of artists and friends.</B></p>
          
        </Header>

        <CollageFrameMobile height={30} image={images[2]} position={Math.floor(Math.random()*100)} className="collageFrameMobile"/>
        
        <Collapse accordion ghost>
          <Panel header="The Experience" key="1">
              <div className="basics">
                <p>HIGHLIGHTS & BLACKOUTS is a chapbook and web experience written by Heather Bowlan, developed by Warren C. Longmire and contributed to by a wide range of artists and poets.</p>
                <hr/>
                <p>To start your experience, <a href="#poems">select a poem.</a></p>
                <p>Each poem is seperated into stages erased with time and reflection. Note that each poem stage may have multiple pages that can be swiped between.</p>
                <hr/>
                <p>Alongside many of poems, observe the images, videos and sounds that occompany each stage.</p>
                <hr/>
                <div className="d-flex">
                  <div className="p-2 d-flex justify-content-center">
                    <img height="250px" src="/images/cover.png"/>
                  </div>
                  
                  <div className="p-2 d-flex flex-column justify-content-center">
                    <p>Please support the artists by purchasing the accompanying book.</p>
                    <p>For more performances, print and web experiences working at the intersection of tech, music and literature, checkout _mixlit.</p>
                  </div>
                </div>
                <hr/>
                <div className="d-flex flex-column">
                    <PoemButton className="basicButton p-1 m-1"><a href="#">Purchase Book</a></PoemButton>
                    <PoemButton className="basicButton p-1 m-1"><a href="http://mixlit.io">Visit _mixlit</a></PoemButton>
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

      <CollageFrameMobile height={150} image={images[2]} position={Math.floor(Math.random()*100)} className="collageFrameMobile"/>
        
    </Layout>
  </div>
}

export default home

