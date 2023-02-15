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
    const [pageHeight, setPageHeight] = useState("50rem")
    const [windows, setwindows] = useState()
    const [width, setWidth] = useState()

    useEffect(() => {
        if (element != null && element != undefined) {
            setElementIsSet(true)
        } else {
            setElementIsSet(false)
        }
    }, [element])

    // const setting = () => {
    //     const bg_length = document.getElementById("firstdiv").clientHeight
    //     const element_length = element.clientHeight
    //     console.log(element_length - bg_length)
    //     console.log("sksks")
    // }

    return (
        <div className={styles.container}>
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
                    <HomePage setElement={setElement} />
                </div>
            </div>
            <div
                id="About"
                className={`
                bg-cover bg-fixed bg-top  pt-[4rem] sm:pt-[13rem] pb-[7rem]`}
                style={{
                    backgroundImage: `url("/4K-Office-Backgrounds.jpg")`,
                }}
            >
                <About />
            </div>
            <div id="Projects">
                <Projects />
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
