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
  { name: "INSTAGRAM", link: "https://www.instagram.com/cyrusburns/" },
  { name: "EMAIL", link: "mailto:cyrusburns@gmail.com" },
];

const Contact = ({ isMobileMenuOpen }: any) => {
  const textBoxRef = useRef(null);
  const container = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    console.log("isMobileMenuOpen: ", isMobileMenuOpen);
    console.log("Container ref: ", container.current);

    if (!isMobileMenuOpen.isMobileMenuOpen && isMobileMenuOpen.index === 2) {
      console.log("Opening Contact...");
      open();
    } else {
      console.log("Closing Contact...");
      close();
    }
  }, [isMobileMenuOpen]);

  const open = () => {
    console.log("Open function called");
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
    console.log("Close function called");
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
      className={`headers flex w-screen h-screen text-[3rem] xs:text-[4rem] sm:text-[14vw] bg-transparent text-white flex-col items-center font-semibold transition duration-700 mix-blend-difference px-4 sm:px-0 bg-red-500 fixed top-0 right-0`}
      style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
    >
      <div
        ref={textBoxRef}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[270px]"
      >
        <div className="-space-y-2">
          <div className="flex justify-center uppercase">
            <p>/CONTACT/</p>
          </div>
        </div>
      </div>

      <div className="mt-[80vh] text-[5rem] xs:text-[4rem] sm:text-[7rem] max-w-lg flex flex-col z-50 mb-56 ">
        <div className="-space-y-10 sm:-space-y-16 font-normal border-b">
          <h1 className="uppercase">Get in</h1>
          <h1 className="uppercase">touch</h1>
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
