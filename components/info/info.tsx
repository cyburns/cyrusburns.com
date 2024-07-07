"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import CYRUS from "@/public/images/cb-b-w.png";

gsap.registerPlugin(ScrollTrigger);

const infoPhrases = [
  {
    paras: [
      "Cyrus is a full-stack software",
      "engineer who loves design of both",
      "front-end user-facing apps and",
      "backend efficiencies.",
    ],
  },
  {
    paras: [
      "Over three years of experience",
      "developing powerful and efficient full",
      "stack applications. Together, we'll",
      "redefine what's possible in tech. No",
      "nonsense, always on the cutting ",
      "edge.",
    ],
  },
  {
    paras: [
      "The combination of my passion for",
      "design, code & interaction positions",
      "me in a unique place in the web and",
      "mobile design development world.",
    ],
  },
];

const exp = [
  {
    title: "Software Engineer: Audia",
  },
  {
    title: "Software Engineer: ReacType",
  },
  {
    title: "Front-end Engineer: Press Sports",
  },
  {
    title: "Freelance Developer: BRIGHT",
  },
];

const Info = ({ isMobileMenuOpen }: any) => {
  const container = useRef<HTMLDivElement>(null);
  const imageRefContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set("#text-ref", { y: 50 });
    gsap.set("#img-ref", { y: 50, opacity: 0 });
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen.isMobileMenuOpen && isMobileMenuOpen.index === 3) {
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
    });

    gsap.to("#text-ref", {
      y: 0,
      duration: 1,
      stagger: 0.055,
      delay: 0.3,
      ease: "power3.inOut",
    });

    gsap.to("#img-ref", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.3,
      ease: "power3.inOut",
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
        });
        gsap.set("#text-ref", { y: 50 });
      },
    });
  };

  return (
    <div
      ref={container}
      className="h-screen w-screen bg-[#141414] text-white pt-24 overflow-hidden fixed top-0 right-0 min-h-fit"
      style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" }}
    >
      <div className="w-full flex flex-col sm:flex-row z-50 p-5 sm:p-10 text-[5vw] md:text-[3vw] lg:text-[1.56vw] leading-[5.5vw] md:leading-[3.5vw] lg:leading-[1.8vw]">
        <div className="flex relative justify-center sm:justify-start items-center sm:items-start">
          <Image
            src={CYRUS}
            alt="CYRUS"
            className="w-full sm:w-[15vw] object-contain"
          />
        </div>

        <div className="flex flex-col lg:flex-row mt-10 sm:mt-0 w-full">
          <div className="flex flex-col sm:ml-[10vw] w-full lg:w-[27vw] space-y-10">
            <p className="text-[4vw] sm:text-[0.75vw] font-extralight uppercase overflow-hidden">
              <span id="text-ref" className="flex">
                Developer / Designer
              </span>
            </p>

            {infoPhrases.map((phrase, index) => (
              <div key={`${index}-p`}>
                {phrase.paras.map((phrase, index) => (
                  <p key={`${index}-span`} className="overflow-hidden">
                    <span id="text-ref" className="flex">
                      {phrase}
                    </span>
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:ml-[10vw] lg:w-[24vw] space-y-10 mt-10 lg:mt-0">
            <p className="text-[4vw] sm:text-[0.75vw] font-extralight uppercase overflow-hidden">
              <span id="text-ref" className="flex">
                past EXPERIENCE
              </span>
            </p>
            <div>
              {exp.map((ex, index) => (
                <p key={`${index}-ex`} className="overflow-hidden">
                  <span id="text-ref" className="flex">
                    {ex.title}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
