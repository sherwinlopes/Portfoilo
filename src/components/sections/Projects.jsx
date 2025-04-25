const projects = [
  {
    img: "https://placehold.co/600x400",
    title: "Project 1",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Project 2",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Project 3",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full min-h-screen pt-24">
      <h1 className="text-8xl font-bold text-[#40454B] mb-10">PROJECTS</h1>

      <div className="grid grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div key={index} className="relative">
           <div
  className="absolute -inset-1 rounded-xl filter blur-xl opacity-70 animate-gradient-conic"
  style={{
    backgroundImage: "conic-gradient(from 0deg, #FF4545, #00FF99, #006AFF, #FF0095, #FF4545)",
  }}
></div>


            <div
              className="absolute -inset-[2px] rounded-xl "
              style={{
                backgroundImage: "conic-gradient(#FF4545,#00FF99,#006AFF,#FF0095,#FF4545)"
              }}
            ></div>

            {/* Main Card */}
            <div className="relative bg-[#363636] rounded-xl overflow-hidden z-10 p-2">
              <img src={project.img} alt={project.title} className="w-full h-32 object-cover" />
              <h2 className="text-xl font-bold text-white mt-2">{project.title}</h2>
              <p className="text-gray-300 mt-1">{project.description}</p>
            </div>

          </div>
        ))}
      </div>

    </section >
  );
};

export default Projects;

