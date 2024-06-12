import React from "react";
import Image from "next/image";
import { FC } from "react";
import { Feature } from "../types/interfaces";

interface FeatureCardProps extends Feature {}
const ExpertsCard: FC<FeatureCardProps> = ({ name, imageUrl, content }) => {
  return (
    <>
      <article className="w-full md:max-w-[30rem] lg:max-w-[36rem] border-2 border-transparent rounded-lg py-4 px-8 hover:bg-[#022C22] hover:border-sky-700 hover:text-slate-100 cursor-pointer">
        <article className="flex flex-col justify-center items-center md:items-start lg:flex-row lg:items-center gap-6">
          <div className="flex flex-col items-center text-center md:text-start space-y-1">
            <div className="bg-lime-300 p-1 rounded-lg">
              <Image
                src={imageUrl}
                width={100}
                height={100}
                alt={name}
                className="rounded-full"
              />
            </div>

            <div className="flex justify-center items-center flex-col">
              <h3 className="font-bold text-base">{name}</h3>
              <p className="text-sm leading-6">{content}</p>
            </div>
          </div>
        </article>
      </article>
    </>
  );
};

export default ExpertsCard;
