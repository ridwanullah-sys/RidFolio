import { useEffect, useState } from "react"
import { BsFacebook } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

export const About = ({ onView }) => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="text-center text-5xl font-bold text-slate-200 ">About Me</div>
            <div
                className={`text-center sm:w-[40rem] my-4 font-semibold text-stone-100 overflow-hidden`}
                id="About_text"
            >
                <div className={`${onView == "on About" ? "animate-slideInS" : null}`}>
                    As a proficient website developer, I have some expertise creating websites, web
                    apps, and dapps. I am an avid user of javascript and python and several
                    frameworks such as nextjs and django. I have demonstrated interpersonal
                    abilities and am skilled at working with people while simultaneously being able
                    to act independently. I have experience using creative problem-solving
                    techniques and negotiating to get a win-win outcome. I always have a strong
                    desire to grow and take on new tasks.
                </div>
            </div>
            <button
                onClick={() => {
                    console.log(onView)
                }}
                className="text-white"
            >
                ELEMENT
            </button>
            <div className="flex justify-between sm:w-[20rem]">
                <a href="#" className="hover:bg-blue-800 rounded-full p-1 hover:text-slate-100">
                    <BsFacebook />
                </a>
                <a href="#" className="hover:bg-red-800 rounded-full p-1 hover:text-slate-100">
                    <SiGmail />
                </a>
                <a href="#" className="hover:bg-blue-600 rounded-full p-1 hover:text-slate-100">
                    <FaTelegramPlane />
                </a>
                <a href="#" className="hover:bg-green-800 rounded-full p-1 hover:text-slate-100">
                    <BsWhatsapp />
                </a>
            </div>
        </div>
    )
}
