"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { shuffleLetters } from "@/lib/hooks";
import Image from "next/image";
import AudiaPhone from "@/public/images/audia/audia-w-text-centered.png";
import BrightArt from "@/public/images/bright/bright-art.png";
import ReacTypeRed from "@/public/images/reactype/reactype-red-text.png";
import Press from "@/public/images/press/press-bg.png";
import Portfolio from "@/public/images/port/pink-green-port.png";
import Link from "next/link";
import { useInView, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    id: "01",
    name: "AUDIA",
    img: AudiaPhone,
    color: "#525252",
  },
  {
    id: "02",
    name: "BRIGHT",
    img: BrightArt,
    color: "#1e3f59",
  },
  {
    id: "03",
    name: "REACTYPE",
    img: ReacTypeRed,
    color: "#d42a30",
  },
  {
    id: "04",
    name: "PRESS",
    img: Press,
    color: "#ffe400",
  },
  {
    id: "05",
    name: "EXTRA",
    img: Portfolio,
    color: "#a01142",
  },
];

const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  const [backgroundColor, setBackgroundColor] = useState("#000000");

  const textBoxRef = useRef(null);
  const zIndexRef = useRef(null);

  const isInView = useInView(textBoxRef);

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
      opacity: 0.5,
    });
  }, []);

  useEffect(() => {
    gsap.utils.toArray("section").forEach((section, index) => {
      const image = document.querySelector(`#preview-${index + 1} img`);
      const startCondition = index === 0 ? "top top" : "bottom bottom";

      gsap.to(image, {
        scrollTrigger: {
          trigger: section as HTMLDivElement,
          start: startCondition,
          end: () => {
            const viewportHeight = window.innerHeight;
            const sectionBottom =
              (section as HTMLDivElement).offsetTop +
              (section as HTMLDivElement).offsetHeight;
            const addDist = viewportHeight * 0.5;
            const endValue = sectionBottom - viewportHeight + addDist;

            return `+=${endValue}`;
          },
          scrub: 1,
        },
        scale: 1.25,
        ease: "none",
      });
    });
  }, []);

  useEffect(() => {
    const animateClipPath = (
      sectionId: any,
      previewId: any,
      startClipPath: any,
      endClipPath: any,
      start = "top center",
      end = "bottom top"
    ) => {
      let section = document.querySelector(sectionId);
      let preview = document.querySelector(previewId);

      ScrollTrigger.create({
        trigger: section as HTMLDivElement,
        start: start,
        end: end,
        onEnter: () => {
          gsap.to(preview, {
            scrollTrigger: {
              trigger: section as HTMLDivElement,
              start: start,
              end: end,
              scrub: 0.125,
            },
            clipPath: endClipPath,
            ease: "none",
          });
        },
      });
    };

    animateClipPath(
      `#section-1`,
      `#preview-1`,
      "polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    );

    for (let i = 1; i <= works.length; i++) {
      const currentSection = `#section-${i}`;
      const prevPreview = `#preview-${i - 1}`;
      const currentPreview = `#preview-${i}`;

      animateClipPath(
        currentSection,
        prevPreview,
        "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
        "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        "top bottom",
        "center center"
      );

      if (i <= works.length + 1) {
        animateClipPath(
          currentSection,
          currentPreview,
          "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          "center center",
          "bottom top"
        );
      }
    }
  }, []);

  useEffect(() => {
    gsap.to(zIndexRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: "+=90vh",
      },
      zIndex: 0,
    });
  });

  useEffect(() => {
    gsap.fromTo(
      ".left-text",
      {
        x: -300,
        duration: 1,
        stagger: 0.2,
        ease: `rough${{ template: "none.out", strength: 1, points: 20 }}`,
      },
      {
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: `rough${{ template: "none.out", strength: 1, points: 20 }}`,
        onStart: () => {
          document
            .querySelectorAll(".left-text")
            .forEach((el) => shuffleLetters(el));
        },
      }
    );
  }, []);

  return (
    <div
      className={`headers text-[5rem] sm:text-[14vw] bg-transparent text-white flex flex-col items-center font-normal uppercase text-center transition duration-700 `}
      style={{ backgroundColor }}
    >
      <div
        ref={zIndexRef}
        className={`w-screen h-screen overflow-hidden transition duration-700  text-white mix-blend-difference z-10`}
      >
        <div
          ref={textBoxRef}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18px] min-w-[270px]"
        >
          <div className="-space-y-2 overflow-hidden ">
            <div className="flex justify-between">
              <p data-value="CYRUS BURNS" className="left-text ">
                CYRUS BURNS
              </p>
              <div className="h-[1em] w-[1em]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                >
                  <path
                    fill="#fff"
                    stroke="#000"
                    strokeWidth=".3"
                    d="m9.145 7.98 3.069 4.394-2.019 1.415-3.07-4.638-.124-.188-.126.188-3.07 4.589-2.02-1.415 3.021-4.346.116-.167-.193-.061-4.54-1.444.745-2.341L5.57 5.602l.2.071V.15H8.18v5.522l.2-.07 4.685-1.636.745 2.34-4.588 1.445-.195.06.117.168Z"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex justify-between">
              <p data-value="DESIGNER" className="left-text">
                DESIGNER
              </p>
              <p data-value="AND" className="left-text">
                AND
              </p>
              <p data-value="DEVELOPER" className="left-text">
                DEVELOPER
              </p>
            </div>

            <div className="flex justify-between">
              <p data-value="07.04" className="left-text">
                07.04
              </p>
              <p data-value="—" className="left-text">
                —
              </p>
              <p data-value="SELECTED WORKS" className="left-text">
                SELECTED WORKS
              </p>
            </div>
          </div>

          <div className="overflow-hidden ">
            <div className="flex space-x-4 justify-between mt-9 relative">
              <Link
                href="/info"
                onMouseEnter={shuffleLetters}
                data-value="INFO"
                className="left-text"
              >
                INFO
              </Link>
              <Link
                href="/contact"
                onMouseEnter={shuffleLetters}
                data-value="CONTACT"
                className="left-text"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>

      {works.map((work, index) => (
        <section
          key={index}
          id={`section-${index + 1}`}
          className="my-[100vh] font-semibold"
        >
          <Link href={`work/${work.id}`} key={work.name}>
            {work.name}
          </Link>
        </section>
      ))}

      <div className="h-[200px] w-full" />

      <div
        className={`section-previews fixed w-[350px] sm:w-[700px] h-[650px] sm:h-[900px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        {works.map((work, index) => (
          <Link href={`work/${work.id}`}>
            <div
              key={index}
              id={`preview-${index + 1}`}
              className={`img w-full h-full absolute overflow-hidden custom-clip `}
              onMouseEnter={() => {
                setBackgroundColor(work.color);
              }}
              onMouseLeave={() => {
                setBackgroundColor("#000000");
              }}
            >
              <Image
                src={work.img}
                alt={work.name}
                width={1000}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>
          </Link>
        ))}

        <div className="h-[200px] w-full" />
      </div>

      <h1 className="text-[2rem] bg-transparent text-white flex flex-col items-center font-semibold uppercase text-center mb-10 z-50">
        [END]
      </h1>
    </div>
  );
};

export default Hero;
