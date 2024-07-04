"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import CB_NO_BLUR from "@/public/images/cb-no-blur-2.png";

const links = [
  { name: "Home", link: "/" },
  { name: "Works", link: "/works" },
  { name: "contact", link: "/contact" },
  { name: "INFO", link: "/info" },
];

const fakeArray = [
  { img: CB_NO_BLUR, opacity: 0.8, scale: 1, zIndex: 2 },
  { img: CB_NO_BLUR, opacity: 0.6, scale: 0.9, zIndex: 3 },
  { img: CB_NO_BLUR, opacity: 0.4, scale: 0.8, zIndex: 4 },
  { img: CB_NO_BLUR, opacity: 0.3, scale: 0.7, zIndex: 4 },
];

const ImageContainer = ({
  styles,
  index,
  isMobileMenuOpen,
  imageRefContainer,
}: any) => {
  const { opacity, scale, zIndex, img } = styles;

  useEffect(() => {
    gsap.set(["#img-1, #img-2, #img-3, #img-4"], { y: 700 });
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      open();
    } else {
      close();
    }
  }, [isMobileMenuOpen]);

  const open = () => {
    gsap.to(["#img-1, #img-2, #img-3, #img-4"], {
      y: 0,
      duration: 1,
      stagger: 0.2,
    });
  };

  const close = () => {};

  const mouse = { x: 0, y: 0 };
  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;

  const scales = [1, 0.9, 0.8, 0.7];

  const updateMouseImage = () => {
    let dx = mouse.x - cx;
    let dy = mouse.y - cy;

    let titleX = (dy / cy) * 20;
    let titleY = (dx / cx) * 20;

    gsap.to(imageRefContainer.current, {
      duration: 2,
      transform: `rotate3d(${titleX}, ${titleY}, 0, 15deg)`,
      ease: "power3.out",
    });

    ["#img-1, #img-2, #img-3, #img-4"].forEach((el, index) => {
      let parallaxX = -(dx * (index + 1)) / 100;
      let parallaxY = -(dy * (index + 1)) / 100;

      let transform = `translate(calc(-50% + ${parallaxX}px), calc(-50% + ${parallaxY}px)) scale(${scales[index]})`;

      gsap.to(el, {
        duration: 2,
        transform,
        ease: "power3.inOut",
      });
    });
  };

  const handleMouseMove = (e: any) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    updateMouseImage();
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="w-[65%] h-[93%] m-10 bg-gradient-to-r from-[#38464a] sm:from-[#0c110f] via-[#38464a] sm:via-[#38464a] to-[#39494e] sm:to-[#39494e] hidden md:flex absolute top-0 left-0"
      style={{ opacity, scale, zIndex }}
      id={`img-${index}`}
    >
      <Image src={img} alt="CB" className="object-cover h-full w-full" />
    </div>
  );
};

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tl = useRef<any>();
  const container = useRef<HTMLDivElement>(null);
  const imageRefContainer = useRef<HTMLDivElement>(null);
  const isInView = useInView(container);

  useEffect(() => {
    if (container.current) {
      tl.current = gsap.timeline({ paused: true }).to(container.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.25,
        ease: "power4.inOut",
      });
    }
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMobileMenuOpen]);

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

  return (
    <>
      <div className="fixed top-5 right-5 text-white uppercase overflow-hidden z-50">
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={7}
          variants={textVariantsTwo}
        >
          {isMobileMenuOpen ? "CLOSE" : "MENU"}
        </motion.button>
      </div>

      <div
        ref={container}
        className="bg-[#141414] w-screen h-screen fixed top-0 right-0 z-40 text-white uppercase overflow-hidden"
        style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
      >
        <div ref={imageRefContainer}>
          {fakeArray.map((styles, index) => (
            <ImageContainer
              styles={styles}
              index={index}
              isMobileMenuOpen={isMobileMenuOpen}
              key={index}
              imageRefContainer={imageRefContainer}
            />
          ))}
        </div>

        <div className="flex h-full pl-5 md:pl-[75%] pt-32 md:pt-72 text-[3rem] !leading-[1] font-bold">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
