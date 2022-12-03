import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      href: "http://linkedin.com",
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      style: "rounded-tr-md",
    },
    {
      id: 2,
      href: "http://github.com",
      child: (
        <>
          GitHub
          <FaGithub size={30} />
        </>
      ),
    },
    {
      id: 3,
      href: "ujunglim1@gmail.com",
      child: (
        <>
          Email
          <HiOutlineMail size={30} />
        </>
      ),
    },
    {
      id: 4,
      href: "/resume.pdf",
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      download: true,
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, href, child, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-0 duration-300" +
              ` ${style}`
            }
          >
            <a
              href={href}
              className="flex items-center justify-between w-full text-white"
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
