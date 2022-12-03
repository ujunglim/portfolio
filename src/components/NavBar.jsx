import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">YuJung</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium capitalize text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-grey-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute w-full h-screen left-0 top-0 bg-gradient-to-b from-black to-gray-500 text-gray-500">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
