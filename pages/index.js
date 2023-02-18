import Head from "next/head"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { About } from "../components/about"
import { Navbar } from "../components/navbar"
import { HomePage } from "../components/page"
import { Projects } from "../components/projects"
import styles from "../styles/Home.module.css"

export default function Home() {
    const [element, setElement] = useState()
    const [elementIsSet, setElementIsSet] = useState(false)
    const { ref: projectRef, inView: myProjectsIsVisible } = useInView()
    const { ref: homeRef, inView: myHomeIsVisible } = useInView()
    const { ref: aboutRef, inView: myAboutIsVisible } = useInView()

    useEffect(() => {
        if (element != null && element != undefined) {
            setElementIsSet(true)
        } else {
            setElementIsSet(false)
        }
    }, [element])

    return (
        <div id="index">
            <Head>
                <title>AbdRauf</title>
                <meta name="description" content="Our smart contract lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="fixed w-screen">
                <Navbar />
            </div>
            <div className="h-[3rem]"></div>
            <div
                id="firstdiv"
                className="bg-gradient-to-r from-blue-500 sm:h-screen to-blue-200 flex flex-col"
            >
                <div id="Home" className="self-center sm:mt-20">
                    <HomePage
                        setElement={setElement}
                        homeRef={homeRef}
                        myHomeIsVisible={myHomeIsVisible}
                    />
                </div>
            </div>
            <div
                id="About"
                className={`
                bg-cover bg-fixed bg-top  pt-[4rem] sm:pt-[13rem] pb-[7rem]`}
                style={{
                    backgroundImage: `url("https://storage.fleek.zone/a8e1ca29-4f77-482c-a827-be4691847836-bucket/4K-Office-Backgrounds (2).jpg")`,
                }}
            >
                <About aboutRef={aboutRef} myAboutIsVisible={myAboutIsVisible} />
            </div>
            <div id="Projects">
                <Projects projectRef={projectRef} myProjectsIsVisible={myProjectsIsVisible} />
            </div>
            <div className=" bg-slate-900 flex justify-between">
                <div className=" text-end p-2 text-slate-200 font-bold">@footer</div>
                <div className=" text-end p-2 text-slate-200 font-bold">
                    abdraufridwantemi@gmail.com
                </div>
            </div>
        </div>
    )
}
