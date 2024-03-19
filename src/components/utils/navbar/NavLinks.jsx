import { NavLink } from "react-router-dom";
import React from "react";

export default function NavLinks({ title, link, target = "" }) {
  const activeLink = `block py-2 px-3 md:p-0 text-white text-md underline underline-offset-[6.5px]`;
  const inactiveLink = `block py-2 px-3 md:p-0 text-white text-md lineit`;

  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        target={target}
      >
        {title}
      </NavLink>
    </li>
  );
}
