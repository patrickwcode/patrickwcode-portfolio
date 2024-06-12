import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/20/solid";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef();

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkMenuClick = (e) => {
      if (isMenuOpen && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", checkMenuClick);

    return () => {
      document.removeEventListener("click", checkMenuClick);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-gray-800/85 absolute top-0 z-10 w-screen text-white backdrop-blur-sm">
      <div className="flex">
        <h1 className="title-font med:text-6xl text-4xl sm:w-full w-3/4 flex items-center justify-center">
          Patrick Wauschek
        </h1>
        <Bars3Icon
          ref={menuRef}
          id="barsIcon"
          className="w-10 h-20 container mx-auto sm:hidden my-auto active:bg-red-400"
          onClick={toggleIsMenuOpen}
        />
      </div>

      {/* Large Screen Menu */}
      <nav className="sm:flex-row sm:flex hidden items-center justify-center text-xl py-2">
        <ul>
          <li className="inline">
            <NavLink
              id="navlink"
              className="mr-4"
              to="/"
              onClick={toggleIsMenuOpen}
            >
              Home
            </NavLink>
          </li>
          <li className="inline">
            <NavLink
              id="navlink"
              className="mr-4"
              to="/about"
              onClick={toggleIsMenuOpen}
            >
              About
            </NavLink>
          </li>
          <li className="inline">
            <NavLink
              id="navlink"
              className="mr-4"
              to="/projects"
              onClick={toggleIsMenuOpen}
            >
              Projects
            </NavLink>
          </li>
          <li className="inline">
            <NavLink id="navlink" to="/contact" onClick={toggleIsMenuOpen}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu */}
      {isMenuOpen && (
        <nav className="flex flex-col sm:hidden text-center text-xl">
          <ul>
            <li>
              <NavLink
                id="navlink"
                className="block py-2"
                to="/"
                onClick={toggleIsMenuOpen}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                id="navlink"
                className="block py-2"
                to="/about"
                onClick={toggleIsMenuOpen}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                id="navlink"
                className="block py-2"
                to="/projects"
                onClick={toggleIsMenuOpen}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                id="navlink"
                className="block py-2"
                to="/contact"
                onClick={toggleIsMenuOpen}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
