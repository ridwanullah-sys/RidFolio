export const Skills = ({ skillsRef, mySkillsIsVisible }) => {
    return (
        <div className="p-1  bg-gradient-to-l from-slate-400 to-blue-200" ref={skillsRef}>
            <div className="text-center text-5xl font-bold text-slate-200"> SKILLS </div>
            <div className={`m-4 ${mySkillsIsVisible ? "animate-HTML" : null}`}>
                <div className="text-lg font-bold text-slate-800">HTML</div>
                <div className="h-[0.5rem]  border border-slate-900 rounded-lg">
                    <div className="bg-blue-600 h-full w-5/6"></div>
                </div>
            </div>
            <div className={`m-4 ${mySkillsIsVisible ? "animate-CSS" : null}`}>
                <div className="text-lg font-bold text-slate-800">CSS</div>
                <div className="h-[0.5rem]  border border-slate-900 rounded-lg">
                    <div className="bg-blue-600 h-full w-3/4"></div>
                </div>
            </div>
            <div className={`m-4 ${mySkillsIsVisible ? "animate-Javascript" : null}`}>
                <div className="text-lg font-bold text-slate-800">Javascript</div>
                <div className="h-[0.5rem]  border border-slate-900 rounded-lg">
                    <div className="bg-blue-600 h-full w-11/12"></div>
                </div>
            </div>
            <div className={`m-4 ${mySkillsIsVisible ? "animate-NextJs" : null}`}>
                <div className="text-lg font-bold text-slate-800">NextJs</div>
                <div className="h-[0.5rem]  border border-slate-900 rounded-lg">
                    <div className="bg-blue-600 h-full w-11/12"></div>
                </div>
            </div>
            <div className={`m-4 ${mySkillsIsVisible ? "animate-Solidity" : null}`}>
                <div className="text-lg font-bold text-slate-800">Solidity</div>
                <div className="h-[0.5rem]  border border-slate-900 rounded-lg">
                    <div className="bg-blue-600 h-full w-11/12"></div>
                </div>
            </div>
        </div>
    )
}
