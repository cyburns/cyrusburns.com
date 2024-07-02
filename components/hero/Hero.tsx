import React from "react";
import Image from "next/image";
import CB from "@/public/images/cb-blur-2.png";

const Hero = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#38464a] sm:from-[#0c110f] via-[#38464a] sm:via-[#38464a] to-[#39494e] sm:to-[#39494e] overflow-hidden">
      <div className="text-white flex justify-center items-center w-full h-full flex-col uppercase relative">
        <h1 className="text-[23vw] font-black z-50 sm:z-0">CYRUS</h1>
        <div className="flex justify-between absolute z-50 bottom-[40%] sm:bottom-[28%] w-[76.5%] text-xs sm:text-base">
          <p>
            Developer / <br /> Designer
          </p>
          <p>
            New York, <br /> New York
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 ">
        <Image
          src={CB}
          alt="CB"
          className="z-10 h-[100vh] object-cover w-screen"
        />
      </div>
    </div>
  );
};

export default Hero;
