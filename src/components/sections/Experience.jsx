import React from "react";

const experiences = [
  {
    duration: "Present",
    title: "Game Programmer Intern",
    company: "Games for Love",
    description:"Working in Unity (C#) to develop core game mechanics, integrate UI assets, and improve cross-platform performance. Focused on AI behavior, physics, and player interaction to enhance gameplay stability and responsiveness.",
  },
  {
    duration: "2023 - 2025",
    title: "UX Designer",
    company: "DePaul University",
    description: "Improved the Mission Master web experience through user research and UI updates. Used React, HTML, and CSS to design accessible, responsive components with an emphasis on student engagement and usability.",
  },
  {
    title: "MS in Computer Science",
    company: "DePaul University",
    description: "Specialized in full-stack development, cloud computing, Android/iOS app development, and DevOps practices.",
  },
  {
    duration: "2022 - 2023",
    title: "Junior Technical Associate",
    company: "Teradata",
    description: "Contributed to MDM UI development with Java and SQL. Built ETL workflows to clean and transform large datasets, automated deployment via CI/CD pipelines, and conducted E2E testing on AWS CloudLake environments.",
  },
  {
    duration: "2019 - 2022",
    title: "Androide Developer Intern",
    company: "SteelBrick",
    description: "Developed features for Android apps using Kotlin and Java. Improved app speed by 25% with UI refactoring and async operations, and integrated CI/CD tools for faster deployment and testing.",
  },
  {
    title: "Bachelor in Computer Engineering",
    company: "Mumbai University",
    description: "Gained a strong foundation in algorithms, software engineering, object-oriented programming, and systems design.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full min-h-screen pt-24">
      <h1 className="text-8xl font-bold text-[#40454B] mb-10">EXPERIENCE</h1>

      <div className="relative flex flex-col">
        <div className="absolute left-[7px] w-[2px] h-full bg-[#FA1C50]" />

        {experiences.map((experience, index) => {
          const hasNextDot = experiences[index + 1]?.duration;

          return (
            <div
              key={index}
              className={`flex flex-col ${
                hasNextDot ? "mb-10" : "mb-3"
              }`}
            >
              {experience.duration && (
                <div className="flex flex-row items-center mb-2">
                  <div className="bg-[#FA1C50] rounded-full w-4 h-4"></div>
                  <h2 className="ml-[8px] text-4xl font-bold text-gray-600">
                    {experience.duration}
                  </h2>
                </div>
              )}

              <div className="ml-[24px] flex flex-col bg-[#16181A] rounded p-2  hover:bg-[#26282A] transition-colors duration-500 ease-in-out">
                <h2 className="text-xl font-bold text-white">
                  {experience.title}
                </h2>
                <h3 className="text-lg text-gray-400 mb-2">{experience.company}</h3>
                <p className="text-gray-400 text-justify">{experience.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;

