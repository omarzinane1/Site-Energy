import Link from "next/link";
import Image from "next/image";
import React from "react";

export function Logo() {
  return (
    <>
      <Link href={"/"} className="flex flex-row items-center gap-1">
        <Image src="/sun.svg" width={32} height={32} alt="logo" />
        <div className="relative">
          <h1 className="capitalize text-white text-xl font-bold tracking-wide">
            Flow
          </h1>
          <div className="absolute -right-2.5 bottom-1.5 w-2 h-2 rounded-full bg-white" />
        </div>
      </Link>
    </>
  );
}
