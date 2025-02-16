import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import aboutImage from "../assets/images/about-image2.png";

function About() {
    return (
        <section id="about" style={{ position: "relative" }}>
            <div
                className="relative flex flex-col gap-14 items-center justify-center animate-fadeIn animation-delay-2 py-16 
							sm:py-30 md:py-24 md:flex-row md:text-left"
            >
                <div
                    style={{ backgroundImage: `url(${bgImage})` }}
                    className="bg-pattern bg-about"
                ></div>
                <div className="md:w-3/5">
                    <h2 className="text-3xl text-center md:text-left font-bold my-6 md:mt-0 md:text-4xl relative">
                        About
                        <hr
                            className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-12
									md:mt-1 md:w-12 md:left-0 md:-translate-x-1"
                        />
                    </h2>
                    <p>
                        I am a fresh graduate in Computer Engineering from Lebanon, set to complete my bachelor's degree in June 2025. My academic journey has laid a strong foundation in computer science principles, and I am eager to translate my knowledge into practical solutions and innovative projects in the tech industry.</p>

                    <br /> <p>
                        Over the course of my studies, I have taken proactive steps to deepen my technical expertise. I have completed courses in PHP, C#, and React, which have enriched my understanding of both backend and frontend development. Alongside these courses, I gained hands-on experience through internships-one focusing on web development with PHP and another that involved working with React, TypeScript, .NET, microservices, as well as tools like GitHub and GitControl.
                        <br />
                    </p>

                    <br />
                    <p> Currently, I am further broadening my skill set by pursuing a project management course with agile methodologies. This initiative reflects my commitment to not only excel in technical development but also to effectively lead and manage projects in dynamic environments.
                    </p>
                    <br />
                    <p> I'm actively looking for new developer roles and <span className="font-bold">open to new opportunities</span> in Lebanon, so feel free to <ScrollLink smooth={true} offset={-100} spy={true} to="contact" className="font-bold text-teal-500 cursor-pointer hover:underline">get in touch</ScrollLink> if you'd like to collaborate or discuss innovative projects.
                    </p>

                </div>
                <div className="md:w-1/3">
                    <img src={aboutImage} alt="Profile image" width={420} />
                </div>
            </div>
        </section>
    );
}

export default About;
