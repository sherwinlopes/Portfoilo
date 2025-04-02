"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useInView } from "motion/react";

const experiences = [
    { time: "Present", title: "Game Programmer Intern", company: "Games for Love", duration: "2025 - Present", description: "Contributed to blockchain solutions development." },
    { time: "2023 - 2025", title: "UX Designer", company: "DePaul University", duration: "2024 - 2025", description: "Worked on software projects with cross-functional teams." },
    { time: "", title: "Masters in Computer Science", company: "DePaul University", duration: "2023 - 2025", description: "Specializing in software engineering and data analytics." },
    { time: "2022 - 2023", title: "Junior Technical Associate", company: "Teradata", duration: "2022 - 2023", description: "Optimized database performance and supported clients." },
    { time: "2019 - 2022", title: "Android Developer Intern", company: "SteelBrik Software", duration: "2021 - 2022", description: "Developed Android apps and improved UI/UX." },
    { time: "", title: "Bachelor's in Computer Science", company: "Mumbai University", duration: "2019 - 2022", description: "Focused on software development and data structures." }
];

const ExperienceItem = ({ item, index, totalItems, scrollYProgress }) => {
    const { time, title, company, duration, description } = item;
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: false });
    
    // Calculate at what scroll progress this item should appear
    const startProgress = index / totalItems;
    const endProgress = (index + 1) / totalItems;
    
    // Create a transform for this specific item's opacity based on the scroll progress
    const itemOpacity = useTransform(
        scrollYProgress,
        [Math.max(0, startProgress - 0.05), startProgress, startProgress + 0.05], 
        [0, 0, 1]
    );

    return (
        <div ref={ref} className="flex mb-12 relative">
            {/* Timeline dot - only show when time is not empty */}
            {time !== "" && (
                <div className="absolute left-0 md:left-6 z-10">
                    <div className="h-5 w-5 rounded-full bg-red-500"></div>
                </div>
            )}

            <motion.div 
                className="ml-10 md:ml-[400px] flex-1 border-2 rounded-lg border-gray-300 p-6"
                style={{ opacity: itemOpacity }}
            >
                <h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>
                <p className="text-lg text-gray-500">{company}</p>
                <p className="text-lg text-gray-500 mb-2">{duration}</p>
                <p className="text-lg text-gray-500">{description}</p>
            </motion.div>

            {/* Time label */}
            <motion.h1 
                className="absolute text-gray-500 text-4xl font-bold left-10 md:left-24"
                style={{ opacity: itemOpacity }}
            >
                {time}
            </motion.h1>
        </div>
    );
};

const Experience = () => {
    const timelineRef = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (timelineRef.current) {
            const rect = timelineRef.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [timelineRef]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

    return (
        <section id="experience" ref={containerRef} className="w-full min-h-screen pt-24 px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-500 mb-10">EXPERIENCE</h1>
            <div className="relative mx-auto flex flex-col w-full" ref={timelineRef}>
                {/* Animated timeline line */}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute w-1 bg-gray-300 left-2 md:left-8 top-0 overflow-hidden"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-1 bg-gradient-to-t from-red-500 via-red-400 to-transparent rounded-full"
                    />
                </div>

                {experiences.map((experience, index) => (
                    <ExperienceItem 
                        key={index}
                        item={experience}
                        index={index}
                        totalItems={experiences.length}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;