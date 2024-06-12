import React, { FC } from "react";
import { customer } from "../types/interfaces";
import Image from "next/image";

interface CustomersCardProps extends customer {}
const CustomersCard: FC<CustomersCardProps> = ({
  name,
  imageUrl,
  skills,
  content,
}) => {
  return (
    <>
      <div className="bg-lime-300 max-w-xs p-5 rounded-lg flex flex-col gap-10">
        <div>
          <p className="text-slate-950">{content}</p>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <Image
            src={imageUrl}
            width={50}
            height={50}
            alt={name}
            className="rounded-full"
          />
          <div>
            <h3>{name}</h3>
            <p>{skills}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersCard;
