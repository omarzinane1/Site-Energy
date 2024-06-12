import React from "react";
import HeadingTwo from "./HeadingTwo";
import Partner from "./Partner";

function Partners() {
  return (
    <>
      <div className="flex flex-col pb-8 justify-center items-center gap-10">
        <div className="flex flex-col w-96 justify-center items-center">
          <HeadingTwo
            title={"Global partners that trusted us"}
            isCentered
            color="white"
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-24 gap-20">
          <div className="p-3 w-60 backdrop-blur-md bg-gray-700 rounded-md">
            <Partner text="Nike" icon="/images/logo3.png" />
          </div>
          <div className="p-3 w-60 backdrop-blur-md bg-gray-700 rounded-md">
            <Partner text="Nike" icon="/images/logo3.png" />
          </div>
          <div className="p-3 w-60 backdrop-blur-md bg-gray-700 rounded-md">
            <Partner text="Nike" icon="/images/logo3.png" />
          </div>
          <div className="p-3 w-60 backdrop-blur-md bg-gray-700 rounded-md">
            <Partner text="Nike" icon="/images/logo3.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
