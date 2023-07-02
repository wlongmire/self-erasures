import { useRef, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Drawer, Tree } from 'antd';
import {  TreeCardGroupDrawer, TreeCard, PoemTitle, NavHeader } from './../styles/styleHome'

import erasures from './../data/erasures.json';

const { DirectoryTree } = Tree;
export default function NavBar() {
    const router = useRouter();
    const [ open, setOpen] = useState(false);

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

    const poem_groups = generateGroups(erasures.items.length, erasures.items, (c, g_idx, idx)=> ({
        title: c.title,
        poem_id: c.id,
        ref: useRef(),
        type: "erasureTitle",
        href:`/blackouts/${c.id}`,
        key:`${c.id}`,
        children: c.stages.map(stage => ({
            title: stage.title,
            poem_id: c.id,
            stage_id: stage.id,
            season: stage.season,
            type: "poemTitle",
            key:`${c.id}-${stage.id}`,
            href: `/blackouts?poem=${c.id}&stage=${stage.id}`
        }))
    }))

    const handlePoemClick = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)

        setTimeout(() => {    
                const active = document.getElementsByClassName("activePoem")
                if (active.length === 1) {
                    active[0].parentElement.parentElement.parentElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
                }
                
            }, 500)
        }
    }

    const navigateTo = (path) => {
        setOpen(false)
        router.push(path)
    }

    return (<NavHeader>
        <nav className="navbar fixed-top navbar-expand-xl bg-dark">
            <div className="container">
                <div className="navbar-brand">
                    <a href="/"><h2>Highlights&Blackouts</h2></a>
                    <p>A Self-Erasure Series By <a href="/poet">Heather Bowlan</a> & <a href="/developer">Warren C. Longmire</a></p>
                </div>

                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={handlePoemClick} className={router.pathname.includes("blackouts")? "poems nav-link active" : "poems nav-link"}  aria-current="page">The Poems</a>
                        <Link href="/series"><a href="/series" onClick={()=>navigateTo("series")} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className={router.pathname == "/series" ? "nav-link active" : "nav-link"} >The Series</a></Link>
                        <Link href="/poet"><a href="/poet" onClick={()=>navigateTo("poet")} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className={router.pathname == "/poet" ? "nav-link active" : "nav-link"}>The Poet</a></Link>
                        <Link href="/developer"><a href="/developer"  onClick={()=>navigateTo("developer")} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className={router.pathname == "/developer" ? "nav-link active" : "nav-link"}>The Developer</a></Link>
                        <Link href="/contributors"><a href="/contributors"  onClick={()=>navigateTo("contributors")} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className={router.pathname == "/contributors" ? "nav-link active" : "nav-link"}>The Contributors</a></Link>
                        <Link href="/playlist"><a href="/playlist" onClick={()=>navigateTo("playlist")} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className={router.pathname == "/playlist" ? "nav-link active" : "nav-link"}>The Playlist</a></Link>
                    </div>
                </div>
            </div>

            <Drawer title="Basic Drawer" placement="right" onClose={()=> { setOpen(false)}} open={open}>
                <TreeCardGroupDrawer className="pt-4">
                    {
                        poem_groups.map((group) => <TreeCard width={`${String(100)}%`}>
                            <DirectoryTree
                                showLine
                                ref={group.ref}
                                width={"100%"}
                                autoExpandParent={true}
                                defaultExpandParent={true}
                                defaultExpandedKeys={router.pathname.includes("blackouts")?[router.query.poem]:[]}
                                switcherIcon={<></>}
                                showIcon={false}
                                selectable={false}
                                treeData={group}
                                titleRender={({ title, href, poem_id, stage_id })=> <PoemTitle className={(router.pathname.includes("blackouts")  && router.query.poem == poem_id && router.query.stage == stage_id ? `activePoem` : "")} onClick={()=> {
                                        if (stage_id) {
                                            setOpen(false)
                                            window.location = href
                                        }
                                    }}>
                                    <span>{poem_id} | {stage_id} | {title} </span>
                                </PoemTitle>
                                }
                            />      
                        </TreeCard>)
                    }
                </TreeCardGroupDrawer>
            </Drawer>
        </nav>
    </NavHeader>);
}