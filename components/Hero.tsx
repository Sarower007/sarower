"use client"
import { useEffect, useState } from 'react';

const Hero = () => {


  return (
    <>
      <div className="relative flex flex-col gap-2 h-screen w-full overflow-hidden justify-between">

        {/* Green background section */}
        <div className="bg-[#97C93E] h-[420px] w-full mx-auto">
          <div className="flex w-[75%] bg-red-600 ml-28">
            <div></div>
          </div>
        </div>

        {/* Dark green background section */}
        <div className="bg-[#002E02] h-[350px] w-full mx-auto">
          <div className="flex w-[75%] ml-28">
            <div></div>
          </div>
        </div>

        {/* Second Green background section */}
        <div className="bg-[#97C93E] h-[350px] w-full mx-auto">
          <div className="flex w-[75%] ml-28">
            <div></div>
          </div>
        </div>

        {/* Centered red div with animation */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 w-[350px] h-[350px]`}
        >
          {/* Content of the red div */}
        </div>

        
      </div>
    </>
  );
};

export default Hero;
