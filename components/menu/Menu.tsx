"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CB_NO_BLUR from "@/public/images/cb-no-blur-2.png";
import ImageContainer from "./ImageContainer";
import { IoChevronForwardSharp } from "react-icons/io5";

const links = [
  { name: "Home", link: "/" },
  { name: "Works", link: "/works" },
  { name: "contact", link: "/contact" },
  { name: "INFO", link: "/info" },
];

const fakeArray = [
  {
    img: CB_NO_BLUR,
    opacity: 0.8,
    scale: 1,
    zIndex: 2,
    depth: 0,
    perspective: 200,
    tiltMaxAngle: 5.5,
  },
  {
    img: CB_NO_BLUR,
    opacity: 0.6,
    scale: 0.93,
    zIndex: 3,
    depth: 0.5,
    perspective: 400,
    tiltMaxAngle: 4.5,
  },
  {
    img: CB_NO_BLUR,
    opacity: 0.4,
    scale: 0.86,
    zIndex: 4,
    depth: 1,
    perspective: 600,
    tiltMaxAngle: 3,
  },
  {
    img: CB_NO_BLUR,
    opacity: 0.3,
    scale: 0.79,
    zIndex: 5,
    depth: 1.5,
    perspective: 800,
    tiltMaxAngle: 1,
  },
  {
    img: CB_NO_BLUR,
    opacity: 0.3,
    scale: 0.72,
    zIndex: 5,
    depth: 1.5,
    perspective: 800,
    tiltMaxAngle: 0.5,
  },
];

const Menu = ({ isMobileMenuOpen }: any) => {
  const container = useRef<HTMLDivElement>(null);
  const imageRefContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      open();
    } else {
      close();
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    gsap.set("#link-ref", { y: 50 });
  }, []);

  const open = () => {
    gsap.to(container.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1.25,
      ease: "power4.inOut",
      zIndex: 100,
      opacity: 1,
    });

    gsap.to("#link-ref", {
      y: 0,
      duration: 1,
      stagger: 0.055,
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
        gsap.set("#link-ref", { y: 50 });
      },
    });
  };

  return (
    <div
      ref={container}
      className="bg-[#141414] w-screen h-screen fixed top-0 right-0 z-40 text-white uppercase overflow-hidden"
      style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
    >
      {fakeArray.map((styles, index) => (
        <ImageContainer
          styles={styles}
          index={index}
          isMobileMenuOpen={isMobileMenuOpen}
          key={index}
          imageRefContainer={imageRefContainer}
        />
      ))}

      <div className="flex h-full pl-5 md:pl-[75%] pt-32 md:pt-72 text-[3rem] !leading-[1] font-bold flex-col">
        <ul>
          {links.map((link, index) => (
            <div className="overflow-hidden">
              <li key={index} id="link-ref">
                <a href={link.link}>{link.name}</a>
              </li>
            </div>
          ))}
        </ul>

        <div className="text-sm font-light absolute bottom-10">
          <div className="mt-[6.4815vh] flex flex-row">
            <p className="w-[11.8229vw] overflow-hidden">
              <span>
                <p className="overflow-hidden">
                  <span className="flex flex-row items-center" id="link-ref">
                    connect
                  </span>
                </p>
              </span>
            </p>
            <span className="-space-y-2">
              <p className="flex flex-row group overflow-hidden">
                <span id="link-ref">
                  LinkedIn{" "}
                  <IoChevronForwardSharp className="group-hover:visible invisible group-hover:translate-x-1 transition-all " />
                </span>
              </p>
              <p className="flex flex-row group overflow-hidden">
                <span id="link-ref">
                  Github{" "}
                  <IoChevronForwardSharp className="group-hover:visible invisible group-hover:translate-x-1 transition-all " />
                </span>
              </p>
              <p className="flex flex-row group overflow-hidden">
                <span id="link-ref">
                  instagram{" "}
                  <IoChevronForwardSharp className="group-hover:visible invisible group-hover:translate-x-1 transition-all " />
                </span>
              </p>
              <p className="flex flex-row group overflow-hidden">
                <span id="link-ref">
                  spotify{" "}
                  <IoChevronForwardSharp className="group-hover:visible invisible group-hover:translate-x-1 transition-all " />
                </span>
              </p>
            </span>
          </div>

          <div className="mt-[6.4815vh] flex flex-row">
            <p className="w-[11.8229vw]">
              <span>
                <p className="overflow-hidden">
                  <span className="flex flex-row items-center" id="link-ref">
                    get in touch
                  </span>
                </p>
              </span>
            </p>
            <span>
              <p className="overflow-hidden">
                <span
                  className="flex flex-row items-center bg-white text-black px-1"
                  id="link-ref"
                >
                  email <IoChevronForwardSharp />
                </span>
              </p>
            </span>
          </div>

          <div className="mt-[6.4815vh] flex flex-row">
            <p className="w-[11.8229vw] overflow-hidden">
              <span>
                <p className="overflow-hidden">
                  <span className="flex flex-row items-center" id="link-ref">
                    New york, <br /> New york
                  </span>
                </p>
              </span>
            </p>

            <span>
              <p className="overflow-hidden">
                <span className="flex flex-row items-center" id="link-ref">
                  Berkshires, <br /> MA
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
