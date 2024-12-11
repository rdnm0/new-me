import React from "react";
import RDLogo from "./rdlogo";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <RDLogo />
      <div className="relative w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg mb-8 transition-transform duration-500 hover:scale-105">
        <img
          src="rohanwebsitepfp.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center max-w-md">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 hover:text-gray-300 transition duration-300">
          Rohan Dhanam
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6">
          IBDP Student @ Glenforest SS
        </p>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
          i enjoy building things with my creative vision :)
        </p>
      </div>
      <div className="flex space-x-6 mt-8">
        <a
          href="https://github.com/rdnm0"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
          aria-label="GitHub"
        >
          <i className="fab fa-github text-3xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rohan-dhanam-55b846264/"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin text-3xl"></i>
        </a>
        <a
          href="mailto:rohandhanam@gmail.com "
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
          aria-label="Email"
        >
          <i className="fas fa-envelope text-3xl"></i>
        </a>
      </div>
      <div className="flex space-x-6 mt-8 text-lg">
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

export default ProfileCard;