import React from 'react';
const Home = () => {
    return (
        <section
            id="home"
            className="w-full flex mb-20">
            <div className="flex flex-col items-start space-y-4 text-left  w-full">
                <h1 className="text-8xl font-bold text-gray-500">ABOUT ME</h1>
                <div className="w-full border-b-4 border-red-500"></div>
                <p className="text-justify text-white">
                    I am a Software Developer with experience in web and mobile app development, cloud technologies, and DevOps practices. I have a strong passion for solving problems, learning new technologies, and building scalable, high-performance applications. With a solid understanding of version control and deployment, I thrive in dynamic environments and continuously work on improving software reliability and efficiency.
                </p>
                <div className="flex items-center justify-start space-x-6">
                    <div className="text-gray-500 flex flex-col items-center">
                        <span className="text-6xl font-bold text-gray-500">+1</span>
                        <p>YEAR OF EXPERIENCE</p>
                    </div>
                    <div className="text-gray-500 flex flex-col items-center">
                        <span className="text-6xl font-bold text-gray-500">5</span>
                        <p>MAJOR PROJECTS</p>
                    </div>
                </div>


                <h1 className="text-4xl font-semibold">Tech Stack</h1>
                <div className="flex">
                    <div className="flex flex-wrap gap-2">
                        <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" className="inline-block mr-2" />
                        <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" className="inline-block mr-2" />
                        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" className="inline-block mr-2" />
                        <img src="https://img.shields.io/badge/Swift-F05138?style=for-the-badge&logo=swift&logoColor=white" alt="Swift" className="inline-block mr-2" />

                        <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" alt="SQL" className="inline-block mr-2" />


                        <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" className="inline-block mr-2" />
                        <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" className="inline-block mr-2" />
                        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" className="inline-block mr-2" />
                        <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" className="inline-block mr-2" />
                        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" className="inline-block mr-2" />


                        <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=aws&logoColor=white" alt="AWS" className="inline-block mr-2" />
                        <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white" alt="C#" className="inline-block mr-2" />
                        <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" className="inline-block mr-2" />

                        <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" className="inline-block mr-2" />

                        <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" className="inline-block mr-2" />
                    </div>

                </div>

            </div>
        </section>


    );
}

export default Home;