import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = ({ setDarkMode, darkMode }) => {
  return (
    <nav className="mb-3 flex justify-between">
      <h1 className="text-xl  dark:text-indigo-300">Prayatna</h1>
      <ul className="flex items-center">
        <li className="cursor-pointer text-xl dark:text-white">
          <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white px-4 py-2 rounded-md ml-4"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
