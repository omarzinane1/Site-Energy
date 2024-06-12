import React from "react";
import HeadingTwo from "./HeadingTwo";
import { Heading } from "lucide-react";
import Buttons from "./Buttons";

function AboutTwo() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-10">
        <HeadingTwo title={"About us"} isCentered />
        <div className="text-center mt-8">
          <p>
            At Flow, we re committed to a sustainable future. As a pioneering
            force in the green energy sector, <br />
            we ve been at the forefront of the transition to clean, renewable
            power sources.
            <br /> Our mission is simple yet profound: to create a world where
            energy is not only abundant but <br />
            also environmentally responsible. We believe that by harnessing the{" "}
            <br />
            power of nature, we can power the world and protect it
            simultaneously.
          </p>
        </div>

        <div className="mt-8">
          <Buttons background="white" text={"Read more"} />
        </div>
      </div>
    </>
  );
}

export default AboutTwo;
