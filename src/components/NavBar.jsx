"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

import NavLink from "./NavLink";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Resume",
    link: "https://drive.google.com/drive/folders/1cYbTHIpnEIJkWzEKvf3SRnXoEfSq1KN9?usp=sharing",
    target: "_blank",
  },
];

export default function NavBar() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);
  return (
    <>
      <nav className="bg-black opacity-90 backdrop-blur-lg fixed w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-7 px-[40px] md:px-[25px]">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="whitespace-nowrap text-white text-xl">VIRAJ PATEL</span>
          </a>
          <button
            data-collapse-toggle="nav-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-black dark:focus:ring-gray-600"
            aria-controls="nav-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open nav menu</span>
            <i className="fa-solid fa-bars text-white fa-lg"></i>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="nav-default">
            <ul className="font-normal flex flex-col p-4 md:p-0 md:flex-row md:space-x-4">
              {links.map((link, index) => (
                <NavLink key={index} title={link.title} link={link.link} target={link.target} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
