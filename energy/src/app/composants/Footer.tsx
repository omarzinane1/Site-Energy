import React from "react";
import { navLinksOne, navLinksThree, navLinksTwo } from "../constants/Links";
import Link from "next/link";
import { Logo } from "./Logo";
import Buttons from "./Buttons";
import Image from "next/image";
import HeadingTwo from "./HeadingTwo";

function Footer() {
  return (
    <>
      <footer className="bg-[#022C22]">
        <div className="px-6 lg:px-14 py-10 ">
          <div className="relative flex lg:flex-row flex-col justify-between items-center gap-6">
            <div className="grid grid-cols-1 gap-6 lg:w-1/2">
              <HeadingTwo
                title={"Your Source for Green Energy Updates"}
                color="white"
              />
              <p className="text-white">
                Stay in the loop with our Green Horizon newsletter, where we
                deliver bite-sized insights into the latest green energy
                solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your e-mail..."
                  className="p-2 rounded-full"
                />
                <Buttons text={"Get in touch"} background={"300"} />
              </div>
            </div>
            <div className="relative overflow-hidden w-64 h-64">
              <div className="absolute top-0 right-0 grid gap-6 w-full h-full clip-circle bg-lime-300">
                <Image
                  src={"/images/4.png"}
                  alt={"logo"}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="px-6 lg:px-14 py-10  bg-lime-1000">
          <div className="flex lg:flex-row flex-col justify-between items-start lg:gap-0 gap-10">
            <Logo />
            <div className="grid grid-cols-3 gap-14">
              <div className="grid grid-cols-1 gap-6">
                {navLinksOne.map((link, index) => (
                  <Link
                    key={index}
                    href={`#${link}`}
                    className="text-sm font-normal tracking-wide text-slate-200"
                  >
                    {link}
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-6">
                {navLinksTwo.map((link, index) => (
                  <Link
                    key={index}
                    href={`#${link}`}
                    className="text-sm font-normal tracking-wide text-slate-200"
                  >
                    {link}
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-6">
                {navLinksThree.map((link, index) => (
                  <Link
                    key={index}
                    href={`#${link}`}
                    className="text-sm font-normal tracking-wide text-slate-200"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-row justify-center items-center w-60 p-3 gap-3 bg-slate-600 text-sm rounded-full">
                <Image
                  src={"/socialmedia/Facebook.svg"}
                  alt={"facebook"}
                  width={25}
                  height={25}
                />
                <p className="text-white">Follow us on Facebook</p>
              </div>
              <div className="flex flex-row justify-center items-center w-60 p-3 gap-3 bg-slate-600 text-sm rounded-full">
                <Image
                  src={"/socialmedia/Instagram.svg"}
                  alt={"facebook"}
                  width={25}
                  height={25}
                />
                <p className="text-white">Follow us on Instagram</p>
              </div>
              <div className="flex flex-row justify-center items-center w-60 p-3 gap-3 bg-slate-600 text-sm rounded-full">
                <Image
                  src={"/socialmedia/LinkedIn.svg"}
                  alt={"facebook"}
                  width={25}
                  height={25}
                />
                <p className="text-white">Follow us on LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="px-6 lg:px-14 py-10  bg-lime-1000 text-right">
          <p className="text-white text-sm">
            © 2024 Flow. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
