import Head from 'next/head';
import dayjs from 'dayjs';

import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

import NavBar from './NavBar';
import images from '../data/collageUrls.json';

import { ModalButton, CommonContainer, CollageFrame, CollageFrameMobile, Footer, LayoutStyle, RegisterModal } from './../styles/styleModules'

import { Modal } from 'antd';

import bookCodes from './../data/bookCodes.json'

const imageMap = {
    "/":[images[1], images[3]],
    "/poet":[images[2], images[3]],
    "/series":[images[0], images[2]],
    "/developer":[images[3], images[1]],
    "/contributors":[images[2], images[0]],
    "/playlist":[images[1], images[1]],
    "/blackouts":[images[0], images[0]],
}

const imageMobileMap = {
    "/":[images[1], images[3]],
    "/poet":[images[2], images[3]],
    "/series":[images[0], images[2]],
    "/developer":[images[3], images[1]],
    "/contributors":[images[1], images[1]],
    "/playlist":[images[1], images[0]],
    "/blackouts":[images[3], images[2]],
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

export default function Layout({children}) {
    const { pathname } = useRouter()
    const router = useRouter()

    const [showModal, setShowModal] = useState(false)
    const [modalWidth, setModalWidth] = useState(60)
    const [modalInfoOpen, setModalInfoOpen] = useState(false)
    const [modalInput, setModalInput] = useState(undefined)

    const image1 = imageMap[pathname]?imageMap[pathname][0]:images[0]
    const image2 = imageMap[pathname]?imageMap[pathname][1]:images[0]
    const position = positionMap[pathname]?positionMap[pathname]:0

    const imageM1 = imageMobileMap[pathname]?imageMobileMap[pathname][0]:images[0]
    const imageM2 = imageMobileMap[pathname]?imageMobileMap[pathname][1]:images[0]
    
    const handleReadClick = (e) => {
        if (bookCodes.includes(modalInput.value)) {
            router.push('/')
            window.localStorage.setItem("loggedIn", true)
            window.localStorage.setItem("loggedInTimeStamp", dayjs().format())
            setShowModal(false)
            
        } else {
            console.error("Not an ISBN")
        }
    }

    useEffect(()=> {
        if (window.localStorage.getItem("loggedInTimeStamp")) {
            const loggedInTime = dayjs(window.localStorage.getItem("loggedInTimeStamp"))

            if (dayjs().diff(loggedInTime, "month") > 3) {
                window.localStorage.removeItem("loggedIn")
                window.localStorage.removeItem("loggedInTimeStamp")
            }
        }
        
        setModalWidth((window.innerWidth < 1000)?85:60)

        const loggedIn = Boolean(window.localStorage.getItem("loggedIn"));
        setShowModal(!loggedIn);
    }, [])

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
            
            <CollageFrameMobile margin={0} height={(pathname !== "/blackouts") ? 100 : 75} position={position} image={imageM1} className="collageFrameMobile"/>

            <CommonContainer className="commonContainer">
                <CollageFrame position={position} image={image1} className="collageFrame"/>
                <main className="container">{children}</main>
                <CollageFrame position={position} image={image2} className="collageFrame"/>
            </CommonContainer>
            
            <CollageFrameMobile margin={0} height={130} position={position + 60} image={imageM2} className="collageFrameMobile"/>

            <Footer>
                <div className="container">
                    <div id="footerTitle">Highlights&Blackouts</div>
                    <div class="publisher">_mix_lit 2023</div>
                </div>
            </Footer>

            {
                showModal &&
                <RegisterModal className="registerModal">
                    <Modal
                        closeIcon={null}
                        title=""
                        centered
                        open={true}
                        footer={<></>}
                        bodyStyle={
                            {borderRadius: "0px"}
                        }
                        maskStyle={
                            {backgroundColor: "rgba(0, 0, 0, 0.8)"}
                        }
                        containerStyle={
                            {borderRadius: "0px"}
                        }
                        width={`${modalWidth}vw`}
                    >
                        <div className="d-flex flex-column align-items-center">
                            <p>Welcome To</p>
                            <img width={"80%"}src="./images/modalTitle.png"/>
                            <p className="p-3 signature">a self-erasure series by <a href="https://www.heatherbowlan.com/">Heather Bowlan</a></p>
                        </div>                        

                        <div className="d-flex flex-column">
                            <div className={`d-flex flex-${(modalWidth===85)?"column":"row"}`}>
                                <input className="m-2 p-2 flex-grow-1 rounded-2" ref={setModalInput} placeholder="Enter your book ISBN"/>
                                <ModalButton className="btn flex-grow-1 btn-outline-dark py-4 m-2">
                                    <h5 className="m-0 p-0" onClick={handleReadClick}>Read</h5>
                                </ModalButton>
                            </div>
                            
                            <ModalButton className="btn btn-outline-dark py-4 m-2" onClick={()=> {
                                window.open("https://www.amazon.com/dp/B0C9SBVQ29", "_blank");
                            }}>
                                <h5 className="m-0 p-0">Purchase Chapbook</h5>
                            </ModalButton>
                            
                            <ModalButton className="btn btn-outline-dark py-4 m-2" data-bs-toggle="collapse" href="#infoCollapse" onClick={()=>{
                                setModalInfoOpen(!modalInfoOpen)
                            }}>
                                <h5 className="m-0 p-0">{(modalInfoOpen)?"See Less":"Learn More"}</h5>
                            </ModalButton>
                            <div class="collapse" id="infoCollapse">
                                <div class="card card-body m-2">
                                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/iWlEeDj4AnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <p>HIGHLIGHTS & BLACKOUTS is a chapbook and code poem experience written by Heather Bowlan and developed by Warren C. Longmire, with contributions by a wide range of artists and poets.</p>
                                    <p>Both the code poem and the chapbook are presented as literary works by the author and publisher.</p>
                                    <p>All proceeds from the chapbook and code poem go to the artists and the continued support of projects are intersection of poetry and technology.</p>
                                    <p>No reader information is stored without explicit consent. Read more poetry.</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="display-7">
                                <span className="p-1">a</span><img width="50px" src="./images/_mixlit_logo.png"/><span className="p-1">publication</span>
                            </div>
                        </div>

                        <div>

                        </div>
                    </Modal>
                </RegisterModal>
            }
        </LayoutStyle>
    );
}