"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallo",
  "Hallå",
  "Guten tag",
  "Hello",
];

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const SplashScreen = ({ setIsLoading }: any) => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      fadeOpacity();
      return;
    }

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === words.length - 1 || index === 0 ? 1000 : 175
    );
  }, [index]);

  const fadeOpacity = () => {
    if (dimension.width > 0) {
      gsap.to(wordsRef.current, {
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setIsLoading(false);
        },
      });
    }
  };

  return (
    <motion.div
      ref={wordsRef}
      initial="initial"
      exit="exit"
      className="h-screen w-screen flex items-center justify-center fixed z-[99] bg-black"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className={`${mont.className} flex items-center text-white text-sm absolute z-[1]`}
          >
            {words[index]}
          </motion.p>
        </>
      )}
    </motion.div>
  );
};

export default SplashScreen;
