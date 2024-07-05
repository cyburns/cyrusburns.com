"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useInView } from "framer-motion";
import CB_NO_BLUR from "@/public/images/cb-no-blur-2.png";
import ImageContainer from "./ImageContainer";

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

const textVariantsTwo = {
  hidden: {
    y: 100,
  },
  visible: (i: number) => ({
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.2,
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  }),
};

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
    gsap.set(".link-ref", { y: "100%" });
  }, []);

  const open = () => {
    gsap.to(".link-ref", {
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 1.5,
    });

    gsap.to(container.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1.25,
      ease: "power4.inOut",
      zIndex: 100,
    });
  };

  const close = () => {
    gsap.to(container.current, {
      zIndex: 0,
      top: "-50%",

      duration: 1.25,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set(container.current, {
          top: 0,

          zIndex: 1,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
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

      <div className="flex h-full pl-5 md:pl-[75%] pt-32 md:pt-72 text-[3rem] !leading-[1] font-bold">
        <ul>
          {links.map((link, index) => (
            <li key={index} className="overflow-hidden">
              <a className="link-ref" href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
