import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
    { time: "Present", title: "Game Programmer Intern", company: "Games for Love", duration: "2025 - Present", description: "Contributed to the development of blockchain solutions, focusing on smart contracts and decentralized applications." },
    { time: "2024 - 2025", title: "UX Designer", company: "DePaul University", duration: "2024 - 2025", description: "Worked on software development projects, collaborating with cross-functional teams to deliver high-quality solutions." },
    { time: "", title: "Masters in Computer Science", company: "DePaul University", duration: "2023 - 2025", description: "Pursuing a Master's degree in Computer Science, specializing in software engineering and data analytics." },
    { time: "2022 - 2023", title: "Junior Technical Associate", company: "Teradata", duration: "2022 - 2023", description: "Worked on data processing and analytics, optimizing database performance, and supporting client solutions." },
    { time: "2019 - 2022", title: "Android Developer Intern", company: "SteelBrik Software", duration: "2021 - 2022", description: "Developed Android applications, improved UI/UX, and optimized application performance." },
    { time: "", title: "Bachelor's in Computer Science", company: "Mumbai University", duration: "2019 - 2022", description: "Completed a Bachelor's degree in Computer Science, focusing on software development and data structures." }
];

const Experience = () => {
    const [scrollY, setScrollY] = useState(0);
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            const visible = [];
            document.querySelectorAll(".timeline-dot").forEach((dot, index) => {
                const rect = dot.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.5) {
                    visible.push(index);
                }
            });
            setVisibleItems(visible);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="experience" className="w-full min-h-screen pt-24">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-500 mb-10">EXPERIENCE</h1>
            <div className="flex flex-col w-full relative mx-auto">
                {/* Static timeline line */}
                <div className="absolute w-1 bg-gray-300 left-2 top-0 h-full"></div>

                {/* Animated growing timeline line */}
                <motion.div
                    className="absolute w-1 bg-red-500 left-2 top-0 origin-top"
                    animate={{ height: scrollY + "px" }}
                    transition={{ ease: "linear", duration: 0.2 }}
                ></motion.div>

                {experiences.map((experience, index) => (
                    <div key={index} className="flex mb-16 relative items-center">
                        {/* Timeline Dot & Time */}
                        <div className="flex flex-col items-center mr-10 relative z-10">
                            <motion.div
                                className="h-5 w-5 rounded-full timeline-dot"
                                animate={{ backgroundColor: visibleItems.includes(index) ? "#ef4444" : "#d1d5db" }}
                                transition={{ duration: 0.3 }}
                            ></motion.div>
                            {/* Time positioned beside the dot */}
                        </div>

                        <h1 className="  text-gray-500 text-lg mr-10 ">{experience.time}</h1>
                        {/* Experience Card (Only visible when line crosses dot) */}
                        <motion.div
                            className="flex-1 text-left border-2 rounded-lg border-gray-300 p-6 opacity-0"
                            animate={{ opacity: visibleItems.includes(index) ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl md:text-4xl font-semibold">{experience.title}</h2>
                            <p className="text-lg text-gray-500">{experience.company}</p>
                            <p className="text-lg text-gray-500 mb-2">{experience.duration}</p>
                            <p className="text-lg text-gray-500">{experience.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
