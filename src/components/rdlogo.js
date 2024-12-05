import React from "react";
import { Link } from "react-router-dom";

const RDLogo = () => {
  return (
    <Link to="/" className="block mt-6 mb-12">
      <div className="text-white font-bold text-4xl text-center hover:text-gray-300 transition-transform transform hover:scale-110">
        RD
      </div>
    </Link>
  );
};

export default RDLogo;
