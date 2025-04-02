import React from "react";

const Projects = () => {
    return (
        <section id="projects" className="w-full min-h-screen bg-gradient-to-r from-blue-200 to-pink-200 p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Add your project cards here */}
            <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600">Description of project 1.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-600">Description of project 2.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="text-gray-600">Description of project 3.</p>
            </div>
        </div>
        </section>
    );
    }

    export default Projects;