"use client";

import React, { useRef, useEffect } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import AudiaPhone from "@/public/images/audia/audia-w-text-centered.png";
import BrightArt from "@/public/images/bright/bright-art.png";
import ReacTypeRed from "@/public/images/reactype/reactype-red-text.png";
import Press from "@/public/images/press/press-bg.png";
import Portfolio from "@/public/images/port/pink-green-port.png";
import { Roboto_Slab } from "next/font/google";
import Link from "next/link";

const rob_slab = Roboto_Slab({ subsets: ["latin"] });

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
    "text-sm font-medium p-1 group-hover:text-white sm:text-[#1a1a1a] transition duration-500";

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
        });
      },
    });
  };

  return (
    <div
      ref={container}
      className="text-white mb-[50rem] z-50 p-5 bg-[#1a1a1a] absolute top-0 left-0 !min-h-fit"
      style={{
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="absolute lg:fixed top-10 lg:top-12 lg:right-14 uppercase lg:max-w-[20vw] flex flex-col">
        <h1
          className={`${rob_slab.className} text-[24vw] lg:text-[10vw] font-black !leading-[1.2]`}
        >
          98
        </h1>
        <h2 className="text-[5vw] !leading-[1] lg:text-[1.75vw] font-semibold lg:mt-5">
          Cyrus <br /> Developer <br /> Designer <br /> Engineer
        </h2>
        <h2 className="text-[3vw] md:text-[2vw] lg:text-[0.75vw] font-light mt-10 lg:mt-32">
          story
        </h2>
        <h2 className="text-[3vw] md:text-[2vw] lg:text-[0.75vw] font-light mt-10 lg:mt-32">
          With a Deep-rooted love for coding and a passiong for design, Cyrus's
          work spans a range of industries and mediums. He is a full-stack
          developer and designer with a focus on front-end development and user
          experience design.
        </h2>
      </div>

      <div className="w-[70%] uppercase hidden lg:block">
        <div className="flex flex-col lg:flex-row space-y-10 justify-center lg:justify-between mt-24  z-50">
          <motion.div
            style={{ y: y1 }}
            className="md:w-[50%] lg:w-[30%] lg:pt-96 flex flex-col group relative"
          >
            <Link href={`work/01`}>
              <Image
                src={AudiaPhone}
                alt="Audia"
                placeholder="blur"
                className={imageClassName}
              />

              <p className={pClass}>Audia / social media app</p>
            </Link>
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="md:w-[50%] lg:w-[20%] flex flex-col group"
          >
            <Link href={`work/02`}>
              <Image
                src={BrightArt}
                alt="BRIGHT"
                placeholder="blur"
                className={imageClassName}
              />
            </Link>
            <p className={pClass}>bright / development agency</p>
          </motion.div>
          <motion.div
            style={{ y: y3 }}
            className="md:w-[50%] lg:w-[23%] lg:pt-[38rem] flex flex-col group"
          >
            <Link href={`work/03`}>
              <Image
                src={ReacTypeRed}
                alt="ReacType"
                placeholder="blur"
                className={imageClassName}
              />
            </Link>
            <p className={pClass}>reactype / Saas</p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center space-y-10 justify-center lg:justify-between mt-10 lg:-mt-[12rem] z-50">
          <motion.div
            style={{ y: y4 }}
            className="md:w-[50%] lg:w-[23%] lg:pt-48 flex flex-col group"
          ></motion.div>
          <motion.div
            style={{ y: y5 }}
            className="md:w-[50%] lg:w-[23%] flex flex-col group"
          >
            <Link href={`work/05`}>
              <Image
                src={Portfolio}
                alt="Jeremy Gill"
                placeholder="blur"
                className={imageClassName}
              />
            </Link>
            <p className={pClass}>Freelance</p>
          </motion.div>
          <motion.div
            style={{ y: y6 }}
            className="md:w-[50%] lg:w-[23%] lg:pt-48 flex flex-col group"
          >
            <Link href={`work/04`}>
              <Image
                src={Press}
                alt="Jeremy Gill"
                placeholder="blur"
                className={imageClassName}
              />
            </Link>
            <p className={pClass}>Press Sports</p>
          </motion.div>
        </div>
      </div>

      {/* SMALL SCREEN OPTIONS */}
      <div className="w-full uppercase block lg:hidden mt-[125%] md:mt-[90%]">
        <div className="flex flex-row justify-between mt-24 z-50">
          <motion.div className="w-full flex flex-col group mr-5">
            <Image
              src={AudiaPhone}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
            <p className={pClass}>Audia</p>
          </motion.div>
          <motion.div className="w-full flex flex-col group">
            <Image
              src={BrightArt}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
            <p className={pClass}>bright</p>
          </motion.div>
        </div>

        <div className="flex flex-row justify-between mt-10 sm:mt-12 z-50">
          <motion.div className="w-full flex flex-col group mr-5">
            <Image
              src={ReacTypeRed}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
            <p className={pClass}>reactype</p>
          </motion.div>
          <motion.div className="w-full flex flex-col group">
            <Image
              src={Portfolio}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
            <p className={pClass}>Freelance</p>
          </motion.div>
        </div>

        <div className="flex flex-row justify-between mt-10 sm:mt-12 z-50">
          <motion.div className="w-full flex flex-col group mr-5">
            <Image
              src={Press}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
            <p className={pClass}>Press Sports</p>
          </motion.div>

          <motion.div className="w-full flex flex-col group"></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Works;
