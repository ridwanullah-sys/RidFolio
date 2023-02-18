import { CgMail } from "react-icons/cg"
import { AiOutlinePhone } from "react-icons/ai"
import { AiOutlineHome } from "react-icons/ai"
import { useEffect } from "react"

export const HomePage = ({ setElement, homeRef, myHomeIsVisible }) => {
    useEffect(() => {
        setElement(document.getElementById("pageId"))
    }, [])

    return (
        <div id="pageId" className="sm:mx-8 ">
            <div className="flex flex-col items-center bg-slate-200 md:h-[50rem] semimd:w-128 pt-9 sm:p-5 semimd:flex-row semimd:items-start semimd:justify-center sm:items-center rounded-lg sm:shadow-2xl shadow-black overflow-hidden">
                <div className="semimd:h-128 ">
                    <img
                        src="https://storage.fleek.zone/a8e1ca29-4f77-482c-a827-be4691847836-bucket/wallhaven-3k7qjv.jpg"
                        className="rounded-md h-[25rem] md:w-[40rem] semimd:h-full semimd:w-full"
                    ></img>
                </div>

                <div
                    className={`${
                        myHomeIsVisible ? "animate-slideInS semimd:animate-slideInB" : null
                    } w-11/12 sm:h-1/2 sm:w-9/12 semimd:h-128 semimd:w-5/12 semimd:p-5 flex flex-col justify-center transition-transform duration-500`}
                    ref={homeRef}
                >
                    <p className="m-2 semimd:my-4 text-slate-700">HELLO CHAMPS, MY NAME IS</p>
                    <div className="m-2 semimd:my-4">
                        <p className="text-4xl font-bold text-slate-700">ABDRAUF</p>
                        <p className="text-4xl font-bold text-slate-700">RIDWAN</p>
                    </div>
                    <p className="m-2 semimd:my-4 text-sm sm:text-xl font-semibold text-slate-700">
                        I'M A FULL STACK WEB DEVELOPER
                    </p>
                    <p className="m-2 text-slate-400 semimd:my-4 sm:text-lg">
                        Are you in need of a well designed and functional website or web
                        application? Here, we do just that!
                    </p>
                    <div className="m-4 semimd:my-10 font-semibold text-slate-700">
                        <div className="my-1 flex justify-between items-center">
                            <CgMail className="text-sm" />
                            <p className="text-sm">abdraufridwantemi@gmail.com</p>
                        </div>
                        <div className=" my-1 flex justify-between items-center">
                            <AiOutlinePhone className="text-sm" />
                            <p className="text-sm">08098456785</p>
                        </div>
                        <div className="my-1 flex justify-between items-center">
                            <AiOutlineHome className="text-sm" />
                            <p className="text-sm">malete, Kwara State</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
