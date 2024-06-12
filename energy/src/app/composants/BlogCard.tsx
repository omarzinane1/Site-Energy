import React, { FC } from "react";
import { blog } from "../types/interfaces";
import Image from "next/image";
import { format } from "date-fns";

interface blogCardProps extends blog {}
const BlogCard: FC<blogCardProps> = ({
  img_url,
  title,
  customer_url,
  customer_name,
  date,
}) => {
  const formattedDate = format(date, "MMMM d, yyyy");
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
        <div className="grid justify-center items-center">
          <Image src={img_url} width={150} height={150} alt={customer_name} className="rounded-lg" />
        </div>
        <div className=" grid grid-cols-1 gap-6">
          <h1 className="font-medium">{title}</h1>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src={customer_url}
              width={30}
              height={30}
              alt={customer_name}
              className="rounded-full"
            />
            <div className="flex flex-row justify-center items-center gap-4">
              <p className="text-sm font-medium">{customer_name}</p>
              <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
