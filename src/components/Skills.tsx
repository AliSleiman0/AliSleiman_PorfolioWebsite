
import { Skill,  skillsBApi, skillsFApi, skillsGApi } from "../api/data";
import MagneticButton from "./MagneticButton";
import { useState, useEffect } from "react";
import  frontend from "/src/assets/images/react.png";
import backned from "/src/assets/images/backend1.png";
import general from "/src/assets/images/general.png";
function Skills() {
    const [dataf, setDataf] = useState<Skill[] | null>(null);
    const [datab, setDatab] = useState<Skill[] | null>(null);
    const [datag, setDatag] = useState<Skill[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const dataf = await skillsFApi.getAll();
            setDataf(dataf);
            const datab = await skillsBApi.getAll();
            setDatab(datab);
            const datag = await skillsGApi.getAll();
            setDatag(datag);
        };

        fetchData();
    }, []);

    return (
        <section id="skills">
            <div className="pb-20 animate-fadeIn animation-delay-2 ">
                <h2 className="text-3xl font-bold mt-6 md:mt-0 md:text-4xl text-center">
                    Skills
                    <hr
                        className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-[36px]
									md:mt-1 md:w-12 md:-translate-x-[45px]"
                    />
                </h2>
                <div className="flex flex-wrap mt-10 justify-center gap-6">

                    <div

                        className="border rounded-lg p-4 flex flex-col items-center max-w-[300px]"
                    >
                        <div className="flex items-center gap-3">
                            <img src={frontend} alt=
                                "Frontend skills atom icon" width={35} height={35} />
                            <h3 className="text-2xl font-semibold">Front-end</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6">
                            {dataf?.map(skill => {
                                return (
                                    <MagneticButton key={skill.id}>
                                        <button
                                            className="bg-skills-bg px-2 py-2 rounded-sm
															 transition-colors hover:bg-teal-700"
                                        >
                                            {skill.skillName}
                                        </button>
                                    </MagneticButton>
                                );
                            })}
                        </div>
                    </div>
                    <div

                        className="border rounded-lg p-4 flex flex-col items-center max-w-[300px]"
                    >
                        <div className="flex items-center gap-3">
                            <img src={backned} alt=
                                "Backend skills gear icon" width={35} height={35} />
                            <h3 className="text-2xl font-semibold">Back-end</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6">
                            {datab?.map( skill => {
                                return (
                                    <MagneticButton key={skill.id}>
                                        <button
                                            className="bg-skills-bg px-2 py-2 rounded-sm
															 transition-colors hover:bg-teal-700"
                                        >
                                            {skill.skillName}
                                        </button>
                                    </MagneticButton>
                                );
                            })}
                        </div>
                    </div>
                    <div

                        className="border rounded-lg p-4 flex flex-col items-center max-w-[300px]"
                    >
                        <div className="flex items-center gap-3">
                            <img src={general} alt=
                                "General skills icon" width={35} height={35} />
                            <h3 className="text-2xl font-semibold">General Skills</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6">
                            {datag?.map(skill => {
                                return (
                                    <MagneticButton key={skill.id}>
                                        <button
                                            className="bg-skills-bg px-2 py-2 rounded-sm
															 transition-colors hover:bg-teal-700"
                                        >
                                            {skill.skillName}
                                        </button>
                                    </MagneticButton>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
