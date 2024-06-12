import React from "react";
import HeadingTwo from "./HeadingTwo";

function About() {
  return (
    <>
      <div id="About us" className="bg-[#FFF7ED] w-full lg:p-20 p-10  rounded-lg">
        <div className="flex flex-row justify-start items-center ">
          <span className="font-bold">.</span>
          <h3>About us</h3>
          <hr />
        </div>
        <div className="mt-8 flex lg:flex-row flex-col justify-between ">
          <div className="mt-8">
            <HeadingTwo title={"Committed to a sustainable future"} />
            <p className="mt-8">
              As a pioneering force in the green energy sector, we ve been at
              the
              <br /> forefront of the transition to clean, renewable power
              sources. Our mission
              <br /> is simple yet profound: to create a world where energy is
              not only abundant
              <br /> but also environmentally responsible. We believe that by
              <br /> harnessing the power of nature, we can power the world and
              protect it
              <br /> simultaneously.
            </p>
          </div>
          <div className=" mt-8 flex flex-col justify-between">
            <div className="mb-4">
              <span className="text-3xl">5,000 Mwh</span>
              <p>Renewable Energy Generated</p>
            </div>
            <div className="mb-4">
              <span className="text-3xl">2,500+</span>
              <p>Metric Tons of CO2 Reduced</p>
            </div>
            <div className="mb-4">
              <span className="text-3xl">10,000+</span>
              <p>Customers Served</p>
            </div>
            <div className="mb-4">
              <span className="text-3xl">15%</span>
              <p>Avg. Energy Saved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
