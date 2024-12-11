import React from "react";
import RDLogo from "../components/rdlogo";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <RDLogo />
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 hover:text-gray-300 transition duration-300">
          Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Explore some of the work I've done.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-2">Project {index + 1}</h2>
            <p className="text-gray-400 text-sm">
              A short description of what this project is about. Click to learn more!
            </p>
          </div>
        ))}
      </div>
      <div className="flex space-x-6 mt-12 text-lg">
        <a
          href="/about"
          className="text-gray-400 hover:text-white transition duration-200 underline underline-offset-4 hover:underline-offset-8"
        >
          about
        </a>
        <a
          href="/projects"
          className="text-gray-400 hover:text-white transition duration-200 underline underline-offset-4 hover:underline-offset-8"
        >
          projects
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition duration-200 underline underline-offset-4 hover:underline-offset-8"
        >
          resume
        </a>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black pointer-events-none opacity-20"></div>
    </div>
  );
};

export default ProjectsPage;