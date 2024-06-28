import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";
import "flowbite/dist/flowbite.css";

const HomeAboutCEO = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex justify-center items-center mt-10 lg:mt-0">
        <Image
          src="https://api.bangladeshisoftware.com/a69633373c9-333256923_492526116224473_1720590606785456778_n.jpg"
          width={400}
          height={400}
          alt="img"
        ></Image>
      </div>

      <div className="flex flex-col justify-center gap-5 items-start">
        <h1 className="text-4xl font-extrabold">
        MD SHAMIM REZA
        </h1>
        <h2>Founder & Owner Of Bangladeshi Software Company</h2>
      </div>
    </div>
  );
};

export default HomeAboutCEO;
