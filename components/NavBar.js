import { useRef, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Drawer, Tree } from 'antd';
import {  TreeCardGroup, TreeCard, PoemTitle, NavHeader } from './../styles/styleHome'

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
        setOpen(true)
        
        setTimeout(() => {
            const active = document.getElementsByClassName("activePoem")
            if (active.length === 1) {
                active[0].parentElement.parentElement.parentElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
            }
        }, 500)
    }

    return (<NavHeader>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark">
            <div className="container">
                <div className="navbar-brand">
                    <a href="/"><h2>Highlights&Blackouts</h2></a>
                    <p>A Self-Erasure Series By <a href="/poet">Heather Bowlan</a> & <a href="/developer">Warren C. Longmire</a></p>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a onClick={handlePoemClick} className={router.pathname.includes("blackouts")? "poems nav-link active" : "poems nav-link"}  aria-current="page">The Poems</a>
                        <Link href="/series"><a className={router.pathname == "/series" ? "nav-link active" : "nav-link"} href="/series">The Series</a></Link>
                        <Link href="/poet"><a className={router.pathname == "/poet" ? "nav-link active" : "nav-link"} href="/">The Poet</a></Link>
                        <Link href="/developer"><a className={router.pathname == "/developer" ? "nav-link active" : "nav-link"} href="/developer">The Developer</a></Link>
                        <Link href="/contributors"><a className={router.pathname == "/contributors" ? "nav-link active" : "nav-link"} href="/contributors">The Contributors</a></Link>
                        <Link href="/playlist"><a className={router.pathname == "/playlist" ? "nav-link active" : "nav-link"} href="/playlist">The Playlist</a></Link>
                    </div>
                </div>
            </div>

            <Drawer title="Basic Drawer" placement="right" onClose={()=> { setOpen(false)}} open={open}>
                <TreeCardGroup className="pt-4">
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
                </TreeCardGroup>
            </Drawer>
        </nav>
    </NavHeader>);
}