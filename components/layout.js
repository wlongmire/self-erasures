import Head from 'next/head'
import { useRouter } from "next/router"
import NavBar from './NavBar';

import { CommonContainer, CollageFrame, Footer, LayoutStyle } from './../styles/styleModules'

export default function Layout({children}) {
    const { pathname } = useRouter()
    const images = [
        "v1/574f88123c44d86f06c2bc65/1683213529929-ECXBOTGRRZCJAQ6O0V58/Bowlan+Precarious+Survival+1.jpg",
        "v1/574f88123c44d86f06c2bc65/1683213529848-U36IANXJ8JCXXF0GLJNN/Bowlan+Precarious+Survival+2.jpg",
        "v1/574f88123c44d86f06c2bc65/1683213528326-6XGQ3Q9EQ1L5I9YO8RKI/Bowlan+Precarious+Survival+3.jpg",
        "v1/574f88123c44d86f06c2bc65/1683213528374-B0MBQBHUQ3X09D8AU587/Bowlan+Precarious+Survival+4.jpg"
    ]

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
            
            <CommonContainer className="commonContainer">
                <CollageFrame position={position} image={image1} className="collageFrame"/>
                <main className="container">{children}</main>
                <CollageFrame position={position} image={image2} className="collageFrame"/>
            </CommonContainer>
            
            <Footer>
                <div className="container">
                    <div id="footerTitle">Highlights&Blackouts</div>
                    <div class="publisher">_mix_lit 2023</div>
                </div>
            </Footer>
        </LayoutStyle>
    );
}