"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

interface ButtonsProps {
  name: string;
  link: string;
}

const Buttons = ({ name, link }: ButtonsProps) => {
  const circle = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: any = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      ?.to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      ?.to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (!timeline.current) return;

    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (!timeline.current) return;
      timeline.current.play();
    }, 300);
  };
  return (
    <button
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      className="flex items-center border rounded-full  px-5 py-4  hover:text-black transition duration-300 hover:scale-95 overflow-hidden relative cursor-pointer"
    >
      <a className="flex z-50" href={link}>
        {name} <FiArrowUpRight className="text-[3.3rem]" />
      </a>

      <div
        ref={circle}
        className="bg-white w-full h-[150%] absolute rounded-full top-[150%] left-0 transition duration-300"
      ></div>
    </button>
  );
};

export default Buttons;
