
import React, { FC } from "react";
import { fsq } from "../types/interfaces";

 interface FaqCardProps extends fsq {}
const Faq : FC<FaqCardProps> = ({qustion,contact}) => {
  return (
    <>
      <div className="grid gap-3">
          <h1 className=" font-medium text-lg">{qustion}</h1>
          <p>{contact}</p>
      </div>
    </>
  );
}

export default Faq;
