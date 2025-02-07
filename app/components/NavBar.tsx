"use client";

import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const NavLinks = ({ isMobile = false }) => {
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
      <ul
        className={classnames("flex", {
          "flex-col items-center space-y-6": isMobile,
          "md:flex-row md:space-x-6 hidden md:flex": !isMobile,
        })}
      >
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              className={classnames("nav-link", {
                "!text-white": href === currentPath,
              })}
              href={href}
              onClick={() => isMobile && setIsOpen(false)}
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
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl uppercase select-none">
          Gregor Cox
        </Link>

        <NavLinks />

        <button
          className="focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <RxHamburgerMenu style={{ fontSize: "1.5rem" }} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 z-50">
          <button
            className="absolute top-6 right-4 text-white"
            onClick={() => setIsOpen(false)}
          >
            <MdClose style={{ fontSize: "2rem" }} />
          </button>
          <NavLinks isMobile />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
