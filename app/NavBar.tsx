"use client";

import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <ul className="flex flex-col items-end space-x-6 md:flex-row">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              className={classnames({
                "nav-link": true,
                "!text-white": href === currentPath,
              })}
              href={href}
              onClick={() => isOpen && setIsOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="flex text-white p-5 border-b-2 border-white bg-gray-800">
      <div className="container mx-auto flex justify-between items-start md:items-center">
        <div className="flex-1">
          <Link href="/" className="text-2xl uppercase">
            Gregor Cox
          </Link>
        </div>
        <div className="flex flex-col items-end">
          <button
            className="focus:outline-none md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            <RxHamburgerMenu style={{ fontSize: "1.5rem" }} />
          </button>
          <div
            className={`md:flex md:items-center ${
              isOpen ? "flex flex-col items-end" : "hidden"
            }`}
          >
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
