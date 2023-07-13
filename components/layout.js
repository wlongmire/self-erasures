import Head from 'next/head'
import { useRouter } from "next/router"
import NavBar from './NavBar';
import images from '../data/collageUrls.json';

import { CommonContainer, CollageFrame, CollageFrameMobile, Footer, LayoutStyle } from './../styles/styleModules'

export default function Layout({children}) {
    const { pathname } = useRouter()

    const imageMap = {
        "/":[images[1], images[3]],
        "/poet":[images[2], images[3]],
        "/series":[images[0], images[2]],
        "/developer":[images[3], images[1]],
        "/contributors":[images[2], images[0]],
        "/playlist":[images[1], images[1]],
        "/blackouts":[images[0], images[0]],
    }

    const positionMap = {
        "/": Math.floor(Math.random()*100),
        "/poet":Math.floor(Math.random()*100),
        "/series":30,
        "/developer":Math.floor(Math.random()*100),
        "/contributors":Math.floor(Math.random()*100),
        "/playlist":Math.floor(Math.random()*100),
        "/blackouts":0,
    }

    const image1 = imageMap[pathname]?imageMap[pathname][0]:images[0]
    const image2 = imageMap[pathname]?imageMap[pathname][1]:images[0]
    const position = positionMap[pathname]?positionMap[pathname]:0

    return(
        <LayoutStyle>
            <Head>
                <title>Highlights and Blackouts - Heather Bowlan</title> 
                <meta name = "description" content="“a _mixlit digital poetry experience" />
                <link rel = "icon" href = "/favicon.ico" />
            </Head>
            {
                (pathname !== "/") && <NavBar/>
            }
            
            {
                pathname !== "blackouts" && <CollageFrameMobile margin={0} height={100} position={position} image={image1} className="collageFrameMobile"/>
            }
            

            <CommonContainer className="commonContainer">
                <CollageFrame position={position} image={image1} className="collageFrame"/>
                <main className="container">{children}</main>
                <CollageFrame position={position} image={image2} className="collageFrame"/>
            </CommonContainer>
            
            <CollageFrameMobile margin={0} height={130} position={position} image={image2} className="collageFrameMobile"/>

            <Footer>
                <div className="container">
                    <div id="footerTitle">Highlights&Blackouts</div>
                    <div class="publisher">_mix_lit 2023</div>
                </div>
            </Footer>
        </LayoutStyle>
    );
}