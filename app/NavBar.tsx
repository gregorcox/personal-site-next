"use client";

import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  return (
    <div className="navbar flex p-5 border-b-2 border-white bg-gray-800">
      <div className="flex-1">
        <Link href="/" className="text-2xl uppercase text-white">
          Gregor Cox
        </Link>
      </div>
      <NavLinks />
    </div>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link
            className={classnames({
              "nav-link": true,
              "!text-white": href === currentPath,
            })}
            href={href}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
