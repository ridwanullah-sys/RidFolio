export const Projects = ({ projectRef }) => {
    return (
        <div className="p-3 bg-blue-200">
            <div
                className="text-center text-xl text-slate-600 font-bold mb-3"
                id="project_text"
                ref={projectRef}
            >
                MY PROJECTS
            </div>
            <div className="flex flex-col sm:flex-row items-center p-5">
                <div
                    className=" w-[12rem] h-[15rem] rounded-lg border-4 grid grid-rows-5 transition duration-150 hover:scale-110 cursor-pointer"
                    onClick={() => {
                        window.open("https://polished-tree-9495.on.fleek.co/")
                    }}
                >
                    <img
                        src="/Screenshot_20230212-130254_Chrome.jpg"
                        className="rounded-md h-full w-full row-span-4 border-b-4"
                    ></img>
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold text-slate-600 text-center">Swap Dapp</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
