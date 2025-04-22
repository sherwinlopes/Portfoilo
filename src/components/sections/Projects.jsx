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

      <div className="grid grid-cols-3 gap-3">
  {projects.map((project, index) => (
    <div key={index} className="relative">
      {/* Glow Layer */}
      <div className="absolute -inset-1 bg-radial from-indigo-500 to-pink-500 rounded-xl z-0"></div>

      {/* Main Card */}
      <div className="relative bg-slate-600 rounded-xl overflow-hidden z-10 p-2">
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

