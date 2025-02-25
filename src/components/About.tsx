//import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import aboutImage from "../assets/images/about-image2.png";
import { About as about, getAbout } from "../api/data";

import { useEffect, useState } from "react";

function About() {
    const [data, setData] = useState<about | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAbout();
            setData(data);
        };

        fetchData();
    }, []);
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
                        {data?.firstP }
                    <br /> </p><p>
                        <br />   {data?.secondP}
                        <br />
                    </p>

                    <br />
                        <p> {data?.thirdP}
                    </p>
                    <br />
                        <p> {data?.fourthP}
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
