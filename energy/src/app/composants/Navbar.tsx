import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { navLinks } from "../constants/nav-Links";
import Button from "./Button";
import NavbarMobile from "./NavbarMobile";

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 min-w-full bg-[#022C22] backdrop-blur-md z-30 px-10">
        <div className="relative container py-6 flex items-center lg:gap-10 gap-44  transition-all">
          <Logo />
          {/* desktop navigation */}
          <nav className="hidden md:flex gap-8 capitalize">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={`#${link}`}
                className="text-sm font-semibold tracking-wide text-slate-200 hover:text-yellow-100"
              >
                {link}
              </Link>
            ))}
            <div className="absolute right-0">
              <Button />
            </div>
          </nav>
          {/* mobile navigation */}

          <NavbarMobile />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
