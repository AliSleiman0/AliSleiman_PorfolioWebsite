import { useEffect, useState } from "react";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import SlideUp from "./SlideUp";
import { BaseProject, netApiProjectsApi, phpProjectsApi, reactTsProjectsApi } from "../api/data";

type ProjectWithType = BaseProject & { type: string };

function Projects() {
    const [selectedFilter, setSelectedFilter] = useState<string>("All");
    const [filteredProjects, setFilteredProjects] = useState<ProjectWithType[]>([]);
    const [dataR, setDataR] = useState<ProjectWithType[]>([]);
    const [dataP, setDataP] = useState<ProjectWithType[]>([]);
    const [dataN, setDataN] = useState<ProjectWithType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const reactData = await reactTsProjectsApi.getAll();
            const phpData = await phpProjectsApi.getAll();
            const netApiData = await netApiProjectsApi.getAll();

            setDataR(reactData.map(p => ({ ...p, type: "React" })));
            setDataP(phpData.map(p => ({ ...p, type: "PHP" })));
            setDataN(netApiData.map(p => ({ ...p, type: ".NET" })));
        };

        fetchData();
    }, []);

    useEffect(() => {
        const combined = [...dataR, ...dataP, ...dataN];
        const filtered = selectedFilter === "All"
            ? combined
            : combined.filter(proj => proj.type === selectedFilter);

        setFilteredProjects(filtered.reverse());
    }, [selectedFilter, dataR, dataP, dataN]);

    return (
        <section id="projects">
            <div className="py-16 animate-fadeIn animation-delay-2">
                <h2 className="relative text-3xl font-bold mt-6 md:mt-0 md:text-4xl text-center">
                    Projects
                    <hr
                        className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-[56px]
								md:-translate-x-[68px] md:mt-1 md:w-12"
                    />
                </h2>

                <Filter
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}

                />


                {/* GRID */}
                <div
                    className="animate-fadeIn grid justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_300px))] 
					gap-x-6 gap-y-6 mt-10"
                >
                    {filteredProjects.map((project) => (
                        <SlideUp
                            key={project.id}
                            classes="project-item"
                            offset="-100px 0px -100px 0px"
                            onClick={() => window.open(project.liveDemoUrl || project.githubUrl, "_blank")}
                        >
                            <img
                                data-hover
                                src={project.imgSrc}
                                alt={project.title}

                            />

                            <div data-hover className="content-slate md:cursor-none">
                                <h3 data-hover
                                    className="text-xl md:text-2xl font-bold text-center text-white mb-2">{project.title}</h3>
                                <p data-hover
                                    className="text-gray-300 block mb-4 text-center">{project.description}</p>

                                <div data-hover className="flex flex-wrap gap-2 mb-5">
                                    {project.techUsed.split(',').map((tech, index) => (
                                        <p
                                            data-hover
                                            key={index}
                                            className="bg-skills-bg px-2 py-1 rounded-xl md:text-sm text-xs"
                                        >
                                            {tech.trim()}
                                        </p>
                                    ))}
                                </div>
                                <div data-hover className="flex w-full gap-4 justify-center">
                                    {project.githubUrl !== "null" && project.githubUrl && (
                                        <Link
                                            to={project.githubUrl}
                                            target="_blank"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="flex flex-col items-center group/item">
                                                <BsGithub
                                                    size={30}
                                                    className="text-white transition-transform group-hover/item:-translate-y-1 cursor-pointer"
                                                />
                                                <span className="text-white">GitHub</span>
                                            </div>
                                        </Link>
                                    )}

                                    {project.liveDemoUrl && (
                                        <Link
                                            to={project.liveDemoUrl}
                                            target="_blank"
                                            onClick={(e) => e.stopPropagation()}
                                            className="hover:text-teal-400 transition-colors"
                                        >
                                            <div className="flex flex-col items-center group/item">
                                                <BsArrowUpRightSquare
                                                    size={30}
                                                    className="text-white transition-transform group-hover/item:-translate-y-1 cursor-pointer"
                                                />
                                                <span className="text-white">Live Demo</span>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </SlideUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;