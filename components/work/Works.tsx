"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import AudiaPhone from "@/public/images/audia/audia-w-text-centered.png";
import BrightArt from "@/public/images/bright/bright-art.png";
import ReacTypeRed from "@/public/images/reactype/reactype-red-text.png";
import Press from "@/public/images/press/press-bg.png";
import Portfolio from "@/public/images/port/pink-green-port.png";

const Works = ({ isMobileMenuOpen }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -1700]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const y6 = useTransform(scrollYProgress, [0, 1], [0, -700]);

  const imageClassName =
    "object-contain w-full filter grayscale hover:filter-none transition duration-500";
  const pClass =
    "text-sm font-medium p-1 group-hover:text-white text-[#1a1a1a] transition duration-500";

  useEffect(() => {
    if (!isMobileMenuOpen.isMobileMenuOpen && isMobileMenuOpen.index === 1) {
      open();
    } else {
      close();
    }
  }, [isMobileMenuOpen]);

  const open = () => {
    gsap.to(container.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1.25,
      ease: "power4.inOut",
      zIndex: 100,
      opacity: 1,
      visibility: "visible",
      display: "block",
    });
  };

  const close = () => {
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
          visibility: "hidden",
          display: "none",
        });
      },
    });
  };

  return (
    <div
      ref={container}
      className="text-white  mb-[50rem] z-50 p-5 bg-[#1a1a1a] absolute top-0 left-0"
      style={{
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="absolute top-16 right-[5vw] max-w-xs uppercase">
        <h2 className="text-[2vw] font-bold mt-6 !leading-[1]">
          Developer <br /> Designer <br /> Engineer
        </h2>
        <h2 className="text-[0.75vw] font-light mt-44">story</h2>{" "}
        <h2 className="text-[0.75vw] font-light mt-44">
          With a Deep-rooted love for coding and a passiong for design, Cyrus's
          work spans a range of industries and mediums. He is a full-stack
          developer and designer with a focus on front-end development and user
          experience design.
        </h2>
      </div>

      <div className="w-[70%] uppercase">
        <div className="flex flex-col lg:flex-row space-y-10 justify-center lg:justify-between mt-24  z-50">
          <motion.div
            style={{ y: y1 }}
            className="md:w-[80%] lg:w-[30%] lg:pt-96 flex flex-col group"
          >
            <Image
              src={AudiaPhone}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
            <p className={pClass}>Audia / social media app</p>
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="md:w-[80%] lg:w-[20%] flex flex-col group"
          >
            <Image
              src={BrightArt}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
            <p className={pClass}>bright / development agency</p>
          </motion.div>
          <motion.div
            style={{ y: y3 }}
            className="md:w-[80%] lg:w-[23%] lg:pt-[38rem] flex flex-col group"
          >
            <Image
              src={ReacTypeRed}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
            <p className={pClass}>reactype / Saas</p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center space-y-10 justify-center lg:justify-between mt-10 lg:-mt-[12rem] z-50">
          <motion.div
            style={{ y: y4 }}
            className="md:w-[80%] lg:w-[23%] lg:pt-48 flex flex-col group"
          ></motion.div>
          <motion.div
            style={{ y: y5 }}
            className="md:w-[80%] lg:w-[23%] flex flex-col group"
          >
            <Image
              src={Portfolio}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
            <p className={pClass}>Freelance</p>
          </motion.div>
          <motion.div
            style={{ y: y6 }}
            className="md:w-[80%] lg:w-[23%] lg:pt-48 flex flex-col group"
          >
            <Image
              src={Press}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
            <p className={pClass}>Press Sports</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Works;
