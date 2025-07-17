import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#11071F] shadow-md fixed top-0 left-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-white ml-2">
              Miraç Doğan
            </h1>
          </div>

          <div className="">
            <p className="text-gray-500 text-l font-medium">
              Software Developer
            </p>
          </div>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex space-x-6">
            {["skills", "projects", "contact"].map((section) => (
              <Link
                key={section}
                to={section}
                spy={true}
                smooth={true}
                offset={-60}
                duration={600}
                className="text-gray-200 hover:text-blue-400 transition cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>

          {/* Mobil Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-200 focus:outline-none transition"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } bg-[#11071F] px-4 pt-2 pb-4 space-y-2`}
      >
        {["skills", "projects", "contact"].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            offset={-60}
            duration={600}
            onClick={() => setMenuOpen(false)}
            className="block text-gray-200 hover:text-blue-400 transition cursor-pointer"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default HeaderComponent;
