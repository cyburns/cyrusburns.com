"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import Buttons from "./Buttons";

gsap.registerPlugin(ScrollTrigger);

const buttons = [
  { name: "LINKEDIN", link: "https://www.linkedin.com/in/cyburns/" },
  { name: "GITHUB", link: "https://github.com/cyburns" },
  { name: "INSTAGRAM", link: "https://www.instagram.com/cyrusburns/" },
  { name: "EMAIL", link: "mailto:cyrusburns@gmail.com" },
];

const talk = "contact";

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

const Contact = ({ isMobileMenuOpen }: any) => {
  const [delayedTimeout, setDelayedTimeout] = useState(true);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen.isMobileMenuOpen && isMobileMenuOpen.index === 2) {
      open();
    } else {
      close();
    }
  }, [isMobileMenuOpen]);

  const open = () => {
    setTimeout(() => {
      setDelayedTimeout(true);
    }, 300);

    gsap.to(container.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1.25,
      ease: "power4.inOut",
      zIndex: 100,
      opacity: 1,
    });
  };

  const close = () => {
    setTimeout(() => {
      setDelayedTimeout(false);
    }, 1500);

    gsap.to(container.current, {
      zIndex: 0,
      top: "-50%",
      duration: 1.25,
      opacity: 0.2,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set(container.current, {
          top: 0,
          zIndex: 1,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
      },
    });
  };

  return (
    <div
      ref={container}
      className="h-screen w-screen bg-[#141414] text-white pt-24 overflow-hidden fixed top-0 right-0 p-5 uppercase"
      style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" }}
    >
      <div className="container-1 overflow-hidden w-screen flex">
        {talk.split("").map((letter, index) => (
          <motion.h1
            key={index}
            className="text-[18vw] sm:text-[15vw] font-black !leading-[0.75]"
            initial="hidden"
            animate={delayedTimeout ? "visible" : "hidden"}
            custom={index}
            variants={textVariants}
          >
            {letter}
          </motion.h1>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="text-[5rem] xs:text-[4rem] sm:text-[7rem] max-w-lg flex flex-col z-50 mb-56 w-full justify-end ">
          <div className="uppercase text-[2.5rem] mt-16 space-y-7  pb-16">
            {buttons.map((button, index) => (
              <Buttons
                key={index}
                name={button.name}
                link={button.link}
                isMobileMenuOpen={isMobileMenuOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
