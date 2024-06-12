import React from "react";
import Image from "next/image";
import Heading from "@/app/composants/Heading";
import Buttons from "./Buttons";

function Contant() {
  return (
    <>
      <div id="Contact" className="relative flex flex-col lg:pt-0 pt-16 w-full justify-center items-center gap-6">
        <div className="flex w-full justify-center items-center flex-row gap-2">
          <Image src="/sun.svg" width={20} height={20} alt="logo" />
          <p className="text-center text-white">Powering Tomorrow</p>
        </div>
        <Heading title="The Future of Green Energy" isCentered />
        <p className="text-center text-white max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
          Our commitment to green energy is paving the way for a cleaner,{" "}
          healthier planet. Join us on a journey towards a future where clean,{" "}
          renewable energy sources transform the way we power our lives.
        </p>
        <div className="flex justify-center items-center gap-2">
          <Buttons text="See our solutions" background={"300"} link="omar" />
          <Buttons text="Get in touch" color={"white"} link="omar" />
        </div>
      </div>
    </>
  );
}

export default Contant;
