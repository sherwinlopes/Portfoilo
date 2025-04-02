import { Home, Briefcase, Folder, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full p-6 fixed top-0 left-0 z-10 flex justify-center items-cente">
      <div className="flex items-center justify-center space-x-10">
        <NavItem icon={Home} text="Home" link="#" />
        <NavItem icon={Briefcase} text="Experience" link="#experience" />
        <NavItem icon={Folder} text="Projects" link="#projects" />
        <NavItem icon={Mail} text="Contact" link="#contact" />
      </div>
    </nav>
  );
}

function NavItem({ icon: Icon, text, link }) {
  return (
    <a href={link}
      className="flex flex-col items-center text-white group cursor-pointer"
      aria-label={text}>
      <Icon className="w-6 h-6 transition duration-300 group-hover:text-[#FA1C50]" />
      <span className="opacity-0 group-hover:opacity-100 group-hover:text-[#FA1C50] group-hover:translate-y-2 transition-all duration-300 font-semibold">
        {text}
      </span>
    </a>
  );
}
