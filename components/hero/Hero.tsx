import React, { useState } from "react";
import Image from "next/image";
import CB from "@/public/cb-blur-4.png";
import { motion } from "framer-motion";

const name = "CYRUS";

const textVariants = {
  hidden: {
    y: 500,
    rotateX: -80,
    transformOrigin: "bottom",
  },
  visible: (i: number) => ({
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.2,
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  }),
};

const textVariantsTwo = {
  hidden: {
    y: 100,
  },
  visible: (i: number) => ({
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.2,
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  }),
};

const Hero = ({ isMounted }: any) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#38464a] sm:from-[#0c110f] via-[#38464a] sm:via-[#38464a] to-[#39494e] sm:to-[#39494e] overflow-hidden relative ">
      <div className="absolute inset-0 flex items-center justify-center w-full h-full z-10">
        <Image
          src={CB}
          alt="Cyrus Burns Portrait"
          className="object-cover h-full w-full"
        />
      </div>

      <div className="text-white flex justify-center items-center w-full h-full flex-col uppercase relative z-20">
        <div className="container-1 overflow-hidden w-screen flex justify-center">
          {name.split("").map((letter, index) => (
            <motion.h1
              key={index}
              className="text-[20vw] font-black !leading-[0.75]"
              initial="hidden"
              animate={!isMounted ? "visible" : "hidden"}
              custom={index}
              variants={textVariants}
            >
              {letter}
            </motion.h1>
          ))}
        </div>
        <div className="flex justify-between absolute bottom-[40%] sm:bottom-[28%] w-[67%] text-xs sm:text-base overflow-hidden">
          <motion.p
            initial="hidden"
            animate={!isMounted ? "visible" : "hidden"}
            custom={3}
            variants={textVariantsTwo}
          >
            Developer / <br /> Designer
          </motion.p>
          <motion.p
            initial="hidden"
            animate={!isMounted ? "visible" : "hidden"}
            custom={6}
            variants={textVariantsTwo}
          >
            New York, <br /> New York
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
