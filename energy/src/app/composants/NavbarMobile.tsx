"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "../constants/nav-Links";

function NavbarMobile() {
  const [isopen, setIsopen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      <div className="flex md:hidden cursor-pointer md:cursor-none bg-white" onClick={toggleMenu}>
        {!isopen ? <Menu /> : <X />}
      </div>
      <figure
        className={`absolute rounded-md right-2 origin-top top-20 ${
          isopen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-50 opacity-0 hidden"
        } w-auto bg-white p-2 transition-all z-50`}
      >
        <nav className="w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="py-1 px-2 transition-all rounded-md hover:bg-slate-700 hover:text-green-500"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </nav>
      </figure>
    </>
  );
}

export default NavbarMobile;
