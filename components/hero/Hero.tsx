import React from "react";
import Image from "next/image";
import CB from "@/public/cb-motion-blur.png";
import { motion } from "framer-motion";

const name = "CYRUS";

const textVariants = {
  hidden: {
    y: 400,
    rotateX: -50,
    transformOrigin: "bottom",
  },
  visible: (i: number) => ({
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      type: "spring",
      stiffness: 70,
      damping: 30,
    },
  }),
};

const Hero = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#38464a] sm:from-[#0c110f] via-[#38464a] sm:via-[#38464a] to-[#39494e] sm:to-[#39494e] overflow-hidden">
      <div className=" text-white flex justify-center items-center w-full h-full flex-col uppercase relative">
        <div className="z-50  container-1 overflow-hidden w-screen flex justify-center">
          {name.split("").map((letter, index) => (
            <motion.h1
              key={index}
              className="text-[23vw] font-black !leading-[0.75]"
              initial="hidden"
              animate="visible"
              custom={index}
              variants={textVariants}
            >
              {letter}
            </motion.h1>
          ))}
        </div>
        <div className="flex justify-between absolute z-50 bottom-[40%] sm:bottom-[28%] w-[76.5%] text-xs sm:text-base">
          <p>
            Developer / <br /> Designer
          </p>
          <p>
            New York, <br /> New York
          </p>
        </div>
      </div>
      <div className="absolute bottom-0">
        <Image
          src={CB}
          alt="CB"
          className="z-10 h-[100vh] object-contain w-screen scale-125"
        />
      </div>
    </div>
  );
};

export default Hero;
