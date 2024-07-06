"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import CYRUS from "@/public/images/cb-b-w.png";

gsap.registerPlugin(ScrollTrigger);

const Info = ({ isMobileMenuOpen }: any) => {
  const infoContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(isMobileMenuOpen);

    if (!isMobileMenuOpen.isMobileMenuOpen && isMobileMenuOpen.index === 3) {
      open();
    } else {
      close();
    }
  }, [isMobileMenuOpen]);

  const open = () => {
    gsap.to(infoContainer.current, {
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
    gsap.to(infoContainer.current, {
      zIndex: 0,
      top: "-50%",
      duration: 1.25,
      opacity: 0.2,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set(infoContainer.current, {
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
      ref={infoContainer}
      className={`headers w-screen text-white flex flex-col items-center font-semibold transition duration-700 mix-blend-difference fixed top-0 right-0 mt-16`}
      style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
    >
      <div className="w-full flex flex-col sm:flex-row z-50 p-5 sm:p-10 text-sm sm:text-2xl">
        <div className="flex justify-center sm:justify-start items-center sm:items-start">
          <Image src={CYRUS} alt="CYRUS" className="w-72 object-contain" />
        </div>

        <div className="flex flex-col lg:flex-row mt-10 sm:mt-0">
          <div className="flex flex-col sm:ml-[10vw] lg:w-[24vw] space-y-10">
            <p className="text-base font-extralight uppercase">
              Developer / Designer
            </p>
            <p className="font-extralight">
              <span className="font-medium">Cyrus is a full-stack </span>
              software engineer who loves{" "}
              <span className="font-medium"> design</span> of both front-end
              user-facing apps and backend efficiencies.
            </p>
            <p className="font-extralight">
              Over three years of experience developing{" "}
              <span className="font-medium">powerful and efficient</span> full
              stack applications. Together, we'll redefine what's possible in
              tech. No nonsense, always on the{" "}
              <span className="font-medium">cutting edge</span>.
            </p>
            <p className="font-extralight">
              The combination of my passion for{" "}
              <span className="font-medium">design</span>, code & interaction
              positions me in a unique place in the{" "}
              <span className="font-medium">web and mobile </span>
              design development world.
            </p>
          </div>

          <div className="flex flex-col sm:ml-[10vw] lg:w-[24vw] space-y-10">
            <p className="text-base font-extralight uppercase">
              past EXPERIENCE
            </p>
            <div>
              <p className="font-extralight">
                Software Engineer:
                <span className="font-medium"> Audia</span>
              </p>

              <p className="font-extralight">
                Software Engineer:
                <span className="font-medium"> ReacType</span>
              </p>

              <p className="font-extralight">
                Front-end Engineer:
                <span className="font-medium"> Press Sports</span>
              </p>

              <p className="font-extralight">
                Freelance Developer / Designer:
                <span className="font-medium"> BRIGHT</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
