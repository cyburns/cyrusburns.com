"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    name: "AUDIA",
    img: "https://cdn.sanity.io/images/mbttrbyl/production/4deceba7fbbfb685d55a0cd4eaaa6077e68135c9-2000x2500.jpg?h=1080&q=60&auto=format",
  },
  {
    name: "BRIGHT",
    img: "https://cdn.sanity.io/images/mbttrbyl/production/ef3e1575c2c83d455d48d0cece290e2af704f5b7-2000x2500.jpg?h=1080&q=60&auto=format",
  },
  {
    name: "REACTYPE",
    img: "https://cdn.sanity.io/images/mbttrbyl/production/947b09129d093a71b27c670a366038159da4c03d-1000x1250.jpg?h=1080&q=60&auto=format",
  },
  {
    name: "PRESS",
    img: "https://cdn.sanity.io/images/mbttrbyl/production/48404a0139bd362614834f55025a6aef8caa4b58-2000x2500.jpg?h=1080&q=60&auto=format",
  },
];

const Hero = () => {
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
      opacity: 0.5,
    });
  });

  useEffect(() => {
    const addImageScale = () => {
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
          scale: 3,
          ease: "none",
        });
      });
    };

    addImageScale();
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
        start,
        end,
        onEnter: () => {
          gsap.to(preview, {
            scrollTrigger: {
              trigger: section as HTMLDivElement,
              start,
              end,
              scrub: 0.125,
            },
            clipPath: endClipPath,
            ease: "none",
          });
        },
      });
    };

    animateClipPath(
      `#section-0`,
      `#preview-0`,
      "polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    );

    for (let i = 2; i <= works.length; i++) {
      const currentSection = `#section-${i}`;
      const prevPreview = `#preview-${i - 1}`;
      const currentPreview = `#preview-${i}`;

      animateClipPath(
        currentSection,
        prevPreview,
        "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
        "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
      );

      if (i < works.length) {
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

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-black text-white z-10">
        <div
          ref={textBoxRef}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18px] min-w-[270px]"
        >
          <div className="-space-y-2 ">
            <div className="flex justify-between ">
              <p>CYRUS BURNS</p>
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
              <p>DESIGNER</p>
              <p>AND</p>
              <p>DEVELOPER</p>
            </div>

            <div className="flex justify-between">
              <p>07.04</p>
              <p>—</p>
              <p> SELECTED WORKS</p>
            </div>
          </div>

          <div className="flex space-x-4 justify-between mt-9">
            <p>INFO</p>
            <p>CONTACT</p>
          </div>
        </div>
      </div>

      <div className="headers text-[15rem] bg-transparent text-white flex flex-col items-center font-semibold">
        {works.map((work, index) => (
          <section key={index} id={`section-${index + 1}`}>
            <h1 key={work.name} className="mt-[150vh]">
              {work.name}
            </h1>
          </section>
        ))}

        <div className="h-[200px] w-full" />

        <div className="section-previews z-30 fixed w-[500px] h-[700px]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {works.map((work, index) => (
            <div
              key={index}
              id={`preview-${index + 1}`}
              className="img w-full h-full absolute overflow-hidden z-30 custom-clip"
            >
              <Image
                src={work.img}
                alt={work.name}
                width={600}
                height={700}
                className="object-cover  w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
