export const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-5 py-2 bg-blue-800">
            <div className="text-slate-100 font-bold text-2xl ">RidFolio</div>
            <div className="w-[25rem] flex justify-around ">
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
        </div>
    )
}
