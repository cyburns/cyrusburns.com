"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import CYRUS from "@/public/images/cb-b-w.png";
import { infoPhrases, exp } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const Info = ({ isMobileMenuOpen }: any) => {
  const container = useRef<HTMLDivElement>(null);

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
      className="fixed inset-0 bg-[#141414] text-white overflow-hidden"
      style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" }}
    >
      <div className="overflow-auto h-full pt-24 pb-10">
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
    </div>
  );
};

export default Info;
