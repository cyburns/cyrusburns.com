"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { IoCaretBack } from "react-icons/io5";
import Buttons from "./Buttons";

gsap.registerPlugin(ScrollTrigger);

const buttons = [
  { name: "LINKEDIN", link: "https://www.linkedin.com/in/cyburns/" },
  { name: "GITHUB", link: "https://github.com/cyburns" },
  { name: "INSTAGRAM", link: "https://www.instagram.com/cyburns/" },
  { name: "EMAIL", link: "mailto:cyrusburns@gmail.com" },
];

const Contact = () => {
  const textBoxRef = useRef(null);

  useEffect(() => {
    gsap.to(textBoxRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: "bottom top",
      },
      delay: 1.75,
      scale: 0.75,
      opacity: 0.25,
      color: "#2b2b2b",
    });
  }, []);

  return (
    <div
      className={`headers text-[5rem] sm:text-[14vw] bg-transparent text-white flex flex-col items-center font-semibold transition duration-700 z-10 mix-blend-difference`}
    >
      <div className="text-lg fixed left-5 top-5">
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

      <div className="text-lg fixed right-5 top-5">
        <button className="border-white text-white hover:text-black mix-blend-difference border-[1px] px-4 py-2 flex flex-row mb-10 hover:bg-white transition duration-300">
          <Link
            href="/info"
            className="flex flex-row items-center justify-between uppercase"
          >
            INFO
            <IoCaretBack className="rotate-180" />
          </Link>
        </button>
      </div>

      <div
        ref={textBoxRef}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[270px]"
      >
        <div className="-space-y-2 ">
          <div className="flex justify-center uppercase">
            <p>/CONTACT/</p>
          </div>
        </div>
      </div>

      <div className="mt-[80vh]  max-w-lg flex flex-col z-50 mb-56 ">
        <div className="-space-y-16 font-normal border-b">
          <h1 className="text-[7rem] uppercase">Get in</h1>
          <h1 className="text-[7rem] uppercase">touch</h1>
        </div>
        <div className="uppercase text-[2.5rem] mt-16 space-y-7  pb-16">
          {buttons.map((button, index) => (
            <Buttons key={index} name={button.name} link={button.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
