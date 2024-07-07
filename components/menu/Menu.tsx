"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ImageContainer from "./ImageContainer";
import { IoChevronForwardSharp } from "react-icons/io5";
import { menuImagesArray, menuLinks, socials } from "@/lib/data";
import LinkText from "./LinkText";

interface MenuProps {
  isMobileMenuOpen: any;
  setIsMobileMenuOpen: any;
}

const Menu = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MenuProps) => {
  const container = useRef<HTMLDivElement>(null);
  const imageRefContainer = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const bg1 = useRef<HTMLDivElement>(null);
  const bg2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobileMenuOpen.isMobileMenuOpen && isMobileMenuOpen.index === null) {
      open();
    } else {
      close();
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    gsap.set(indicatorRef.current, { opacity: 0 });
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

    gsap.to(indicatorRef.current, {
      delay: 1.5,
      opacity: 1,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
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
        gsap.set(indicatorRef.current, { opacity: 0 });
        gsap.killTweensOf(indicatorRef.current);
      },
    });
  };

  const moveBackgroundSpan = () => {
    gsap.to(bg1.current, {
      x: "110%",
      duration: 0.5,
      ease: "power3.inOut",
    });

    gsap.to(bg2.current, {
      x: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  const moveBackBackgroundSpan = () => {
    gsap.to(bg1.current, {
      x: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });

    gsap.to(bg2.current, {
      x: "-100%",
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  return (
    <div
      ref={container}
      className="bg-[#141414] w-screen h-screen fixed top-0 right-0 z-40 text-white uppercase overflow-hidden"
      style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
    >
      {menuImagesArray.map((styles, index) => (
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
          {menuLinks.map((link, index) => {
            const [hoveredIndex, setHoveredIndex] = useState<number | null>(
              null
            );

            return (
              <div
                className="overflow-hidden"
                key={index}
                onClick={() => {
                  setIsMobileMenuOpen({
                    isMobileMenuOpen: false,
                    index: link.index,
                    prevIndex: isMobileMenuOpen.index,
                  });
                }}
              >
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  id="link-ref"
                >
                  <LinkText
                    link={link}
                    index={index}
                    isHovered={hoveredIndex === index}
                  />
                </div>
              </div>
            );
          })}
        </ul>

        <div className="text-sm font-light absolute bottom-10">
          <div className="mt-[6.4815vh] flex flex-row">
            <p className="w-[44vw] md:w-[11.8229vw] overflow-hidden">
              <span>
                <p className="overflow-hidden">
                  <span className="flex flex-row items-center" id="link-ref">
                    connect
                  </span>
                </p>
              </span>
            </p>
            <span>
              {socials.map((link, index) => (
                <p key={index} className="group overflow-hidden">
                  <a
                    href={link.link}
                    id="link-ref"
                    className="flex flex-row items-center"
                  >
                    {link.name}
                    <IoChevronForwardSharp className="group-hover:opacity-100 opacity-0 group-hover:translate-x-1 transition-all " />
                  </a>
                </p>
              ))}
            </span>
          </div>

          <div className="mt-[6.4815vh] flex flex-row">
            <p className="w-[44vw] md:w-[11.8229vw]">
              <span className="relative">
                <p className="overflow-hidden">
                  <span
                    ref={indicatorRef}
                    className="indicator absolute left-[-13px] top-[0.1rem]  w-[8px] h-[14.2px] bg-white"
                    id="link-ref"
                  />
                  <span className="flex flex-row items-center" id="link-ref">
                    get in touch
                  </span>
                </p>
              </span>
            </p>
            <span
              className="group z-40 relative"
              onMouseEnter={moveBackgroundSpan}
              onMouseLeave={moveBackBackgroundSpan}
            >
              <p className="overflow-hidden relative">
                <span
                  ref={bg2}
                  id="link-ref"
                  className="absolute -left-5 top-0 bg-white text-black px-1 z-40 w-20 h-6 mr-2"
                />

                <span
                  ref={bg1}
                  id="link-ref"
                  className="absolute left-0 top-0 bg-white text-black px-1 z-40 w-full h-6"
                />

                <span
                  id="link-ref"
                  className="flex flex-row items-center  text-black px-1 relative z-40"
                >
                  email <IoChevronForwardSharp />
                </span>
              </p>
            </span>
          </div>

          <div className="mt-[6.4815vh] flex flex-row">
            <p className="w-[44vw] md:w-[11.8229vw] overflow-hidden">
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
                  Berkshires, <br /> Massachusetts
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
