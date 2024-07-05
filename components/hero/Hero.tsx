import React, { useRef, useEffect, useState } from "react";
import { heroImageArray } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";

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

const Hero = ({ isMounted, isMobileMenuOpen }: any) => {
  const [delayedTimeout, setDelayedTimeout] = useState(true);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) {
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
      opacity: 0.2,
      duration: 1.25,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set(container.current, {
          top: 0,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          zIndex: 1,
        });
      },
    });
  };

  return (
    <div
      ref={container}
      className="h-screen w-screen bg-gradient-to-r from-[#38464a] sm:from-[#0c110f] via-[#38464a] sm:via-[#38464a] to-[#39494e] sm:to-[#39494e] overflow-hidden fixed top-0 right-0"
      style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" }}
    >
      {heroImageArray.map((styles, index) => {
        const {
          opacity,
          scale,
          zIndex,
          img,
          depth,
          perspective,
          tiltMaxAngle,
        } = styles;

        return (
          <Tilt
            className="h-full w-full absolute parallax-effect-img"
            tiltMaxAngleX={tiltMaxAngle}
            tiltMaxAngleY={tiltMaxAngle}
            tiltReverse={true}
            perspective={800}
            trackOnWindow={true}
            style={{ scale: 1.4 }}
          >
            <Image
              src={img}
              alt="Cyrus Burns Portrait"
              className="object-cover h-full w-full"
              style={{
                opacity,
                scale,
                zIndex,
                transform: `translateZ(${depth}px)`,
                perspective,
                marginLeft: `${15 * index}px`,
              }}
            />
          </Tilt>
        );
      })}

      <div className="text-white flex justify-center items-center w-full h-full flex-col uppercase relative">
        <div className="container-1 overflow-hidden w-screen flex justify-center">
          {name.split("").map((letter, index) => (
            <motion.h1
              key={index}
              className="text-[20vw] font-black !leading-[0.75]"
              initial="hidden"
              animate={!isMounted && delayedTimeout ? "visible" : "hidden"}
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
            animate={!isMounted && delayedTimeout ? "visible" : "hidden"}
            custom={3}
            variants={textVariantsTwo}
          >
            Developer / <br /> Designer
          </motion.p>
          <motion.p
            initial="hidden"
            animate={!isMounted && delayedTimeout ? "visible" : "hidden"}
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
