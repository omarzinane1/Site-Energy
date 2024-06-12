import React, { FC } from "react";

interface HeadingProps {
  title: string;
  isCentered?: boolean;
  color?: "white" | "#000000";
}
const HeadingTwo: FC<HeadingProps> = ({
  title,
  color = "#000000",
  isCentered,
}) => {
  return (
    <>
      <h2
        className={`${
          isCentered && "text-center"
        } text-${color}  text-clip  font-medium sm:text-4xl lg:text-4xl`}
      >
        {title}
      </h2>
    </>
  );
};

export default HeadingTwo;
