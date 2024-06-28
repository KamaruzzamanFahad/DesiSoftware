import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";
import "flowbite/dist/flowbite.css";
import { Badge } from "flowbite-react";
import { HiCheck, HiClock } from "react-icons/hi";

const Feature = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-20 gap-16">
      <div className="flex justify-center items-center mt-10 lg:mt-0">
        <Image
          src="https://api.bangladeshisoftware.com/291b9119d71-WhatsApp%20Image%202023-10-26%20at%2009.33.25_26808495.webp"
          width={1000}
          height={1000}
          alt="img"
        ></Image>
      </div>

      <div className="flex flex-col justify-center gap-5 items-start">
        <h1 className="text-4xl font-extrabold">
          We Ensure Your Website Top Five Needed Feature
        </h1>
        <h2 className="font-bold">According to your preference</h2>

        <div className='flex gap-2'>
          <Badge color='#e8f1ff' size="sm" icon={HiCheck} className='bg-[#e8f1ff]' />
          <p className='font-bold'>Fast website delivery.</p>
        </div>

        <div className='flex gap-2'>
          <Badge color='#e8f1ff' size="sm" icon={HiCheck} className='bg-[#e8f1ff]' />
          <p>Loading time from 1 to 2 <span className='font-bold'>seconds</span>.</p>
        </div>

        <div className='flex gap-2'>
          <Badge color='#e8f1ff' size="sm" icon={HiCheck} className='bg-[#e8f1ff]' />
          <p>Best value for the lowest price.</p>
        </div>

        <div className='flex gap-2'>
          <Badge color='#e8f1ff' size="sm" icon={HiCheck} className='bg-[#e8f1ff]' />
          <p>Website design according to your preference.</p>
        </div>

        <div className='flex gap-2'>
          <Badge color='#e8f1ff' size="sm" icon={HiCheck} className='bg-[#e8f1ff]' />
          <p>1 year Free <span className='font-bold'>customer support</span></p>
        </div>

      </div>
    </div>
  );
};

export default Feature;
