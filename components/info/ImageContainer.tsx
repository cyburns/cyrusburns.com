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
    if (isMobileMenuOpen.isMobileMenuOpen && isMobileMenuOpen.index === null) {
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
    });
  };

  const backgroundBlur = index > 0 ? "blur-3xl" : "";

  return (
    <Tilt
      tiltMaxAngleX={tiltMaxAngle}
      tiltMaxAngleY={tiltMaxAngle}
      tiltReverse={true}
      perspective={800}
      trackOnWindow={true}
      className="w-full sm:w-[15vw] object-contain absolute top-0 left-0 h-full sm:h-[80vh] blur-sm"
    >
      <div
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
          style={{ marginLeft: `${15 * index}px`}}
        />
      </div>
    </Tilt>
  );
};

export default ImageContainer;
