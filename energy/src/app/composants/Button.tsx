import Link from "next/link";
import React, { FC, ReactNode } from "react";

const Button = () => {
  return (
    <>
      <div>
        <Link
          href={"/"}
          className="p-4 rounded-full border-2 text-white text-sm"
        >
          Get in touch
        </Link>
      </div>
    </>
  );
};

export default Button;
