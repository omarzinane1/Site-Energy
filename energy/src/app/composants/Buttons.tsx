import Link from "next/link";
import React, { FC } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  link?: string;
  background?: string;
  text: string;
  color?: "white" | "#000000";
}
const Button: FC<ButtonProps> = ({
  link,
  text,
  color = "#000000",
  variant = "primary",
  background,
}) => {
  return (
    <>
      <button
        className={`btn ${
          variant === "primary"
            ? "btn-primary"
            : variant === "secondary"
            ? "btn-secondary"
            : "btn-outline"
        } bg-lime-${background} bg w-40 p-4 rounded-full border-2 text-${color} text-sm`}
      >
        <Link href={`#${link}`}>{text}</Link>
      </button>
    </>
  );
};

export default Button;
