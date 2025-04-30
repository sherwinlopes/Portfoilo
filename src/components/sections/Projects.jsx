const projects = [
  {
    img: "src/assets/project-1.png",
    title: "Rogue",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "src/assets/project-2.png",
    title: "Fitness App in iOS",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "src/assets/project-3.png",
    title: "Movie Library Website",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "src/assets/project-3.png",
    title: "Weather App",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Pothole Detection System",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://placehold.co/600x400",
    title: "File Encryption System",
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
              className="absolute -inset-[2px] rounded-xl blur-md opacity-50 animate-conic"
              style={{
                '--angle': '0deg',
                backgroundImage: 'conic-gradient(from var(--angle),#0083ff,#00fffb,#0083ff,#0083ff)',
              }}
            ></div>




            <div
              className="absolute -inset-[2px] rounded-xl animate-conic"
              style={{
                '--angle': '0deg',
                backgroundImage: 'conic-gradient(from var(--angle),#0083ff,#00fffb,#0083ff,#0083ff)',
              }}></div>

            <div className="relative bg-[#363636] rounded-xl overflow-hidden z-10 p-2">
              <img src={project.img} alt={project.title} className="w-full h-34 object-cover" />
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
