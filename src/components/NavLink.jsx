'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link"

export default function NavLink({ title, link, target = "" }) {
  const activeLink = `block py-2 px-3 md:p-0 text-white text-md underline underline-offset-[6.5px]`;
  const inactiveLink = `block py-2 px-3 md:p-0 text-white text-md lineit`;

  const path = usePathname();
  const isActive = path === link;

  return (
    <li>
      <Link href={link} className={isActive ? activeLink : inactiveLink} target={target}>
        {title}
      </Link>
    </li>
  );
}
