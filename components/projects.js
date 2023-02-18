export const Projects = ({ projectRef }) => {
    return (
        <div className="p-3 bg-blue-500">
            <div
                className="text-center text-2xl text-slate-600 font-bold mb-3"
                id="project_text"
                ref={projectRef}
            >
                MY PROJECTS
            </div>
            <div className="sm:w-[25rem] flex flex-col sm:flex-row items-center h-fit p-8">
                <div
                    className="rounded-lg border-4 transition duration-150 hover:scale-110 cursor-pointer bg-cyan-800"
                    onClick={() => {
                        window.open("https://polished-tree-9495.on.fleek.co/")
                    }}
                >
                    <img
                        src="https://storage.fleek.zone/a8e1ca29-4f77-482c-a827-be4691847836-bucket/Screenshot_20230212-130254_Chrome.jpg"
                        className="rounded-md h-[15rem] w-full row-span-4 border-b-2"
                    ></img>

                    <div className="flex flex-col items-center m-1 bg-slate-200">
                        <p className="text-lg font-bold text-slate-600">Name:</p>
                        <p className="text-lg font-semibold text-slate-600">Swap Dapp</p>
                    </div>
                    <div className="flex flex-col items-center m-1 row-span-1 border-t-2">
                        <p className="text-lg font-bold text-slate-200">Description:</p>
                        <p className="text-sm font-semibold text-slate-200">
                            This ia an app that provide four DEX options where users can swap
                            tokens. These DEXs are Uniswap, Sushiswap, Curve and Balancer. To
                            execute a swap, it checks the four DEXs and then execute the swap from
                            the DEX providing the best rate. However, users also have the liberty to
                            manually choose the DEX they want to execute their swap with.
                            Additionally, if any tokens to be swapped is not present in the list of
                            tokens. Users can easily add the new token using the token address.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
