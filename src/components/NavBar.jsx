"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import AOS from "aos";
import Link from "next/link";

export default function NavBar() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav className="h-20 w-full bg-black/85 backdrop-blur-lg">
      <div className="mx-auto flex h-full max-w-screen-xl flex-wrap items-center justify-between px-10 xl:px-5">
        <Link href="#home" className="flex items-center">
          <span className="text-xl text-white transition-all duration-300 hover:opacity-60">
            VIRAJ PATEL
          </span>
        </Link>
        <ul className="hidden gap-4 font-normal md:flex">
          <NavBarLink href="#work">work</NavBarLink>
          <NavBarLink href="#about">about</NavBarLink>
          <NavBarLink href="#contact">contact</NavBarLink>
          <NavBarLink
            href="https://drive.google.com/drive/folders/1cYbTHIpnEIJkWzEKvf3SRnXoEfSq1KN9?usp=sharing"
            target="_blank"
          >
            resume
          </NavBarLink>
        </ul>
        <ul className="font-normal md:hidden">
          <NavBarLink
            href="https://drive.google.com/drive/folders/1cYbTHIpnEIJkWzEKvf3SRnXoEfSq1KN9?usp=sharing"
            target="_blank"
          >
            resume
          </NavBarLink>
        </ul>
      </div>
    </nav>
  );
}

function NavBarLink({ href, children, target, style = "" }) {
  return (
    <li>
      <Link
        href={href}
        target={target}
        className={`block text-md text-white transition-all duration-300 hover:opacity-60 ${style}`}
      >
        {children}
      </Link>
    </li>
  );
}
