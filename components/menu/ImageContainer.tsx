"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const ImageContainer = ({ styles, index, isMobileMenuOpen }: any) => {
  const { opacity, scale, zIndex, img, depth, perspective, tiltMaxAngle } =
    styles;

  useEffect(() => {
    gsap.set(["#img-1", "#img-2", "#img-3", "#img-4"], { y: 500 });
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      open();
    } else {
      close();
    }
  }, [isMobileMenuOpen]);

  const open = () => {
    gsap.to(["#img-1", "#img-2", "#img-3", "#img-4"], {
      y: 0,
      duration: 1,
      stagger: 0.1,
    });
  };

  const close = () => {
    gsap.to(["#img-1", "#img-2", "#img-3", "#img-4"], {
      y: 0,
      duration: 1,
      stagger: 0.1,
      onComplete: () => {
        gsap.set(["#img-1", "#img-2", "#img-3", "#img-4"], { y: 500 });
      },
    });
  };

  return (
    <Tilt
      className="h-full w-full absolute parallax-effect-img"
      tiltMaxAngleX={tiltMaxAngle}
      tiltMaxAngleY={tiltMaxAngle}
      tiltReverse={true}
      perspective={800}
      trackOnWindow={true}
    >
      <div
        className="w-[65%] h-[93%] m-10 bg-gradient-to-r from-[#38464a] sm:from-[#0c110f] via-[#38464a] sm:via-[#38464a] to-[#39494e] sm:to-[#39494e] hidden md:flex absolute top-0 left-0 inner-element"
        style={{
          opacity,
          scale,
          zIndex,
          transform: `translateZ(${depth}px)`,
          perspective,
        }}
        id={`img-${index}`}
      >
        <Image
          src={img}
          alt="CB"
          className="object-cover h-full w-full"
          style={{ marginLeft: `${15 * index}px` }}
        />
      </div>
    </Tilt>
  );
};

export default ImageContainer;
