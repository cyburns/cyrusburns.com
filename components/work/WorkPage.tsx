"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { works } from "@/lib/data";
import Link from "next/link";
import { IoCaretBack } from "react-icons/io5";

const WorkPage = ({ id }: any) => {
  const [scrolledPercent, setScrolledPercent] = useState("0");

  const work = works.find((work) => work.id === id);
  const nextWorkId = works.find((work) => work.id === id + 1);

  if (!work) return null;

  const mainImgRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const updateScrollAnimation = () => {
    const totalPageHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = totalPageHeight - viewportHeight - 400;

    const movementMultiplier = 0.6;

    gsap.to(".moving-percent", {
      y: scrollableDistance * movementMultiplier,
      scrollTrigger: {
        trigger: ".moving-percent",
        start: "top bottom",
        end: `+=${totalPageHeight}`,
        scrub: true,
      },
    });
  };

  useLayoutEffect(() => {
    gsap.to(mainImgRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
      },
      scale: 0.7,
    });

    ScrollTrigger.create({
      trigger: document.documentElement,
      scrub: true,
      start: 0,
      end: "bottom top",
      onUpdate: (self: any) => {
        const scrollProgress = self.progress * 100;
        setScrolledPercent(scrollProgress.toFixed(0));
      },
    });

    const resizeObserver = new ResizeObserver(updateScrollAnimation);
    resizeObserver.observe(document.documentElement);

    updateScrollAnimation();

    return () => {
      resizeObserver.disconnect();
    };
  }, [work]);

  useEffect(() => {
    updateScrollAnimation();
  }, [work]);

  return (
    <div className="mt-16 mb-48">
      <div className="text-lg fixed left-5 top-5 z-50">
        <button className="border-white text-white hover:text-black mix-blend-difference border-[1px] px-4 py-2 flex flex-row mb-10 hover:bg-white transition duration-300">
          <Link
            href="/"
            className="flex flex-row items-center justify-between uppercase"
          >
            <IoCaretBack />
            BACK
          </Link>
        </button>
      </div>

      <div className="flex w-full items-center justify-center z-50">
        <h1 className="text-white mix-blend-difference text-[18vw] sm:text-[14vw] z-30">
          {work?.metaOne}
        </h1>
      </div>

      <div className="-mt-16 sm:-mt-44 px-24">
        <Image
          ref={mainImgRef}
          src={`/images/${work.photoPathName}/${work.imgs[0]}`}
          width={3000}
          height={0}
          className="object-cover w-screen"
          alt={work.metaOne}
        />
      </div>

      <div className="text-black mix-blend-difference text-[20vw] sm:text-[8vw] flex flex-row justify-between moving-percent z-[99999999]"></div>

      <div className="mt-24 flex flex-col sm:flex-row justify-between mx-5 md:mx-10 lg:mx-[12%] xl:mx-[18%]">
        <h2 className="text-white mix-blend-difference text-5xl font-semibold sm:w-1/3 z-30">
          {work?.header}
        </h2>
        <div className="sm:w-1/2 mt-10 sm:mt-0">
          <h3 className="text-white mix-blend-difference text-xl font-light z-30">
            {work?.subheader}
          </h3>
          <h4 className="text-white mix-blend-difference text-medium font-extralight z-30 mt-10">
            {work?.thirdHeading}
          </h4>
        </div>
      </div>

      <div className="sm:max-w-[50%] flex flex-col justify-center items-center mx-auto mt-48">
        {work.imgs.slice(1).map((img, index) => (
          <Image
            key={index}
            src={`/images/${work.photoPathName}/${img}`}
            width={4000}
            height={0}
            className="object-cover w-screen mt-24 sm:mt-48"
            alt={work.metaOne}
          />
        ))}
      </div>
      <div className="end-move" />
    </div>
  );
};

export default WorkPage;
