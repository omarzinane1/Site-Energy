import React, { FC } from "react";
import Image from "next/image";
interface IconProps {
  icon?: any;
  text: string;
}
const Partner: FC<IconProps> = ({ icon, text }) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <Image src={icon} width={32} height={32} alt="logo" />
        <div>
          <h3 className="capitalize text-white text-xl font-bold tracking-wide">
            {text}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Partner;
