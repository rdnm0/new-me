import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-black text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold hover:rotate-180 transition-transform">
        RD
      </Link>
      <div className="relative group">
        <button className="text-lg">...</button>
        <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded shadow-lg hidden group-hover:block">
          <ul>
            <li>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-700">home</Link>
            </li>
            <li>
              <Link to="/projects" className="block px-4 py-2 hover:bg-gray-700">projects</Link>
            </li>
            <li>
              <a href="/resume" className="block px-4 py-2 hover:bg-gray-700">resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;