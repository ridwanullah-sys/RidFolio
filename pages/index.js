import Head from "next/head"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { About } from "../components/about"
import { Navbar } from "../components/navbar"
import { HomePage } from "../components/page"
import { Projects } from "../components/projects"
import styles from "../styles/Home.module.css"

export default function Home() {
    const [element, setElement] = useState()
    const [elementIsSet, setElementIsSet] = useState(false)
    const [onView, setOnView] = useState("on Page")

    useEffect(() => {
        if (element != null && element != undefined) {
            setElementIsSet(true)
        } else {
            setElementIsSet(false)
        }
    }, [element])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    const handleScroll = () => {
        const height = window.innerHeight
        const AboutRect = document.getElementById("About_text").getBoundingClientRect()
        const pageRect = document.getElementById("page_text").getBoundingClientRect()
        const projectRect = document.getElementById("project_text").getBoundingClientRect()
        if (projectRect.y < height && projectRect.bottom > 0) {
            setOnView("on project")
            console.log("on project")
        } else if (AboutRect.y < height && AboutRect.bottom > 0) {
            setOnView("on About")
            console.log("on About")
        } else if (pageRect.y < height && pageRect.bottom > 0) {
            setOnView("on Page")
            console.log("on Page")
        }
    }

    return (
        <div id="index">
            <Head>
                <title>AbdRauf</title>
                <meta name="description" content="Our smart contract lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="sticky top-0">
                <Navbar />
            </div>
            <div
                id="firstdiv"
                className="bg-gradient-to-r from-blue-500 sm:h-screen to-blue-200 flex flex-col"
            >
                <div id="Home" className="self-center sm:mt-20">
                    <HomePage setElement={setElement} onView={onView} />
                </div>
            </div>
            <div
                id="About"
                className={`
                bg-cover bg-fixed bg-top  pt-[4rem] sm:pt-[13rem] pb-[7rem]`}
                style={{
                    backgroundImage: `url("/4K-Office-Backgrounds (2).jpg")`,
                }}
            >
                <About onView={onView} />
            </div>
            <div id="Projects">
                <Projects onView={onView} />
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
