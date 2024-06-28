import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";
import "flowbite/dist/flowbite.css";

const HomeBanner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center gap-5 items-start">
        <h1 className="text-4xl font-extrabold">
          We Make Custom Software Solution any type Business
        </h1>
        <div className='flex gap-5'>
          <Button size="lg" className="bg-pink-500 font-bold">
            Contact Sales Team
          </Button>
          <Button size="lg" className="bg-blue-500 font-bold">
            Get Free Appointment
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/dkxbkydf5/image/upload/v1686838005/robot_dvysuh.png"
          width={250}
          height={250}
          alt="img"
        ></Image>
      </div>
    </div>
  );
};

export default HomeBanner;
