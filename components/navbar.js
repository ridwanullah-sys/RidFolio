import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center px-5 py-2 bg-blue-800">
                <div className="text-slate-100 font-bold text-2xl">RidFolio</div>
                <div className="w-[25rem] sm:flex justify-around hidden ">
                    <a
                        className="hover:transition-colors hover:duration-500 text-slate-100 font-bold hover:bg-slate-100 hover:text-blue-800 p-1 rounded-lg"
                        href="#Home"
                    >
                        HOME
                    </a>
                    <a
                        className="hover:transition-colors hover:duration-500 text-slate-100 font-bold hover:bg-slate-100 hover:text-blue-800 p-1 rounded-lg"
                        href="#About"
                    >
                        ABOUT
                    </a>
                    <a
                        className="hover:transition-colors hover:duration-500 text-slate-100 font-bold hover:bg-slate-100 hover:text-blue-800 p-1 rounded-lg"
                        href="#Projects"
                    >
                        PROJECTS
                    </a>
                </div>

                <div
                    className="sm:hidden"
                    onClick={() => {
                        if (showMenu) {
                            setShowMenu(false)
                        } else {
                            setShowMenu(true)
                        }
                    }}
                >
                    <AiOutlineMenu className="text-3xl lg hover:transition-colors hover:duration-500 text-slate-100 font-extrabold hover:bg-slate-100 hover:text-blue-800 p-1 rounded-lg border-2" />
                </div>
            </div>
            <div
                className={` bg-blue-800  self-end  px-4 w-fit mt-[3rem] overflow-hidden sm:hidden ${
                    showMenu ? "fixed " : "hidden"
                }`}
            >
                <div className="flex flex-col items-center animate-navBar">
                    <a
                        className="hover:transition-colors hover:duration-500 text-slate-100 font-bold hover:bg-slate-100 hover:text-blue-800 p-1 rounded-lg m-1"
                        href="#Home"
                    >
                        HOME
                    </a>
                    <a
                        className="hover:transition-colors hover:duration-500 text-slate-100 font-bold hover:bg-slate-100 hover:text-blue-800 p-1 rounded-lg m-1"
                        href="#About"
                    >
                        ABOUT
                    </a>
                    <a
                        className="hover:transition-colors hover:duration-500 text-slate-100 font-bold hover:bg-slate-100 hover:text-blue-800 p-1 rounded-lg m-1"
                        href="#Projects"
                    >
                        PROJECTS
                    </a>
                </div>
            </div>
        </div>
    )
}
