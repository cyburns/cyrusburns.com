"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import CYRUS from "@/public/images/cb-b-w.png";
import Link from "next/link";
import { IoCaretBack } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
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
      className={`headers text-[3rem] xs:text-[4rem] sm:text-[14vw] bg-transparent text-white flex flex-col items-center font-semibold transition duration-700 z-10 mix-blend-difference`}
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
            href="/contact"
            className="flex flex-row items-center justify-between uppercase"
          >
            CONTACT
            <IoCaretBack className="rotate-180" />
          </Link>
        </button>
      </div>

      <div
        ref={textBoxRef}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[270px]"
      >
        <div className="-space-y-2 ">
          <div className="flex justify-center text-center">
            <p>/INFO/</p>
          </div>
        </div>
      </div>

      <div className="mt-[80vh] max-w-xs sm:max-w-lg  flex flex-col z-50 mb-56">
        <div className="-space-y-6 sm:-space-y-16 text-center font-normal">
          <h1 className="text-[5rem] sm:text-[7rem] uppercase">Cyrus</h1>
          <h1 className="text-[4.75rem] sm:text-[6.75rem] uppercase">Burns</h1>
        </div>
        <Image
          src={CYRUS}
          alt="CYRUS"
          className="object-cover justify-center mt-10"
        />

        <p className="text-xl mt-10 font-extralight">
          <span className="font-medium"> Full-stack </span>
          software engineer who loves{" "}
          <span className="font-medium"> design</span> of both front-end
          user-facing apps and backend efficiencies.
        </p>
        <p className="text-xl mt-10 font-extralight">
          Over three years of experience developing{" "}
          <span className="font-medium">powerful and efficient</span> full stack
          applications. Together, we'll redefine what's possible in tech. No
          nonsense, always on the{" "}
          <span className="font-medium">cutting edge</span>.
        </p>
        <p className="text-xl mt-10 font-extralight">
          The combination of my passion for{" "}
          <span className="font-medium">design</span>, code & interaction
          positions me in a unique place in the{" "}
          <span className="font-medium">web and mobile </span>
          design development world.
        </p>
        <p className="text-xl mt-10 font-extralight">
          <span className="font-medium">Past experience:</span> <br />
          <span className="pt-5">
            Audia <br />
            ReacType <br />
            Press <br />
            BRIGHT <br />
          </span>
        </p>

        <div className="mt-10 text-4xl text-center font-normal space-y-3">
          <h2 className="uppercase">open for enquiries</h2>
          <h2 className="uppercase">reach out</h2>
        </div>
        <div className="text-xl xs:text-4xl text-center">
          <h3 className="mt-16 underline">cyrusburns@gmail.com</h3>
        </div>
      </div>
    </div>
  );
};

export default Info;
