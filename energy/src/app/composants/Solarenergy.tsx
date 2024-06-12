import Link from "next/link";
import React from "react";
import Image from "next/image";

function Solarenergy() {
  return (
    <>
      <div className="flex justify-between lg:flex-row flex-col items-center gap-6">
        <div className="flex flex-col bg-white">
          <p className="leading-8">
            Our commitment to green energy is paving the way for a cleaner,
            healthier planet.{" "}
          </p>
          <h2 className="mt-8 text-3xl text-slate-500">EV charging</h2>
          <h1 className="mt-8 text-3xl">Solar Energy</h1>
          <p className="leading-8 mt-6">
            Solar panels convert sunlight into electricity. Photovoltaic (PV)
            <br /> cells on these panels capture the energy from the sun and
            convert it
            <br /> into electrical power.
          </p>
          <Link href="#" className="text-slate-950 mt-3">
            Learn more
          </Link>
          <h1 className="text-2xl mt-8 text-slate-500">Wind Energy</h1>
          <h1 className="mt-6 text-2xl text-slate-500">Hydropower</h1>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="/images/3.png"
            width={400}
            height={450}
            alt="logo"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default Solarenergy;
