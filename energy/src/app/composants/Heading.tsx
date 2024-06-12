import React, { FC } from "react";

interface HeadingProps {
  title: string;
  isCentered: boolean;
}

const Heading: FC<HeadingProps> = ({ title, isCentered }) => {
  return (
    <>
      <h1
        className={`${
          isCentered && "text-center"
        } max-w-[46rem] bg-clip-text text-transparent bg-gradient-to-tr from-zinc-100 via-zinc-200 to-zinc-300  font-bold text-3xl sm:text-4xl lg:text-6xl`}
      >
        {title}
      </h1>
    </>
  );
};

export default Heading;
