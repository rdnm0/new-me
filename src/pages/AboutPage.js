import React from "react";
import RDLogo from "../components/rdlogo";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <RDLogo />
      <div className="text-center max-w-md">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 hover:text-gray-300 transition duration-300">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6">
          I am Rohan, a passionate developer who enjoys solving problems and creating visually appealing web applications.
        </p>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
          When I’m not coding, I love working out, playing sports (captain of varsity table tennis), and watching movies :D
        </p>
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
    </div>
  );
};

export default AboutPage;