"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { IoCaretBack } from "react-icons/io5";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

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
          <button className="flex items-center border rounded-full  px-5 py-4 hover:bg-white hover:text-black transition duration-300 hover:scale-95">
            <a className="flex" href="https://www.linkedin.com/in/cyburns/">
              LINKEDIN <FiArrowUpRight className="text-[3.3rem]" />
            </a>
          </button>

          <button className="flex items-center border rounded-full  px-5 py-4 hover:bg-white hover:text-black transition duration-300 hover:scale-95">
            <a className="flex" href="https://github.com/cyburns">
              GITHUB <FiArrowUpRight className="text-[3.3rem]" />
            </a>
          </button>
          <button className="flex items-center border rounded-full  px-5 py-4 hover:bg-white hover:text-black transition duration-300 hover:scale-95">
            <a className="flex" href="https://www.instagram.com/cyrusburns/">
              INSTAGRAM <FiArrowUpRight className="text-[3.3rem]" />
            </a>
          </button>
          <button className="flex items-center border rounded-full px-5 py-4 hover:bg-white hover:text-black transition duration-300 hover:scale-95">
            <a className="flex" href="mailto:cyrusburns@gmail.com">
              EMAIL <FiArrowUpRight className="text-[3.3rem]" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;