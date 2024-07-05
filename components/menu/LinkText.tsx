import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LinkText = ({ link, index, isHovered }: any) => {
  const hoverInTimeline = useRef(null);
  const hoverOutTimeline = useRef(null);

  const staggerAmount = 0.03;
  const yAmount = 100;
  const rotateXAmount = 90;
  const duration = 0.3;

  useEffect(() => {
    const initialLetters = document.querySelectorAll(
      `#menu-item-${index} .initial span`
    );
    const hoverLetters = document.querySelectorAll(
      `#menu-item-${index} .hover span`
    );
    //@ts-ignore
    hoverOutTimeline.current = gsap.timeline({ paused: true });
    //@ts-ignore
    hoverOutTimeline.current
      .to(hoverLetters, {
        y: `${yAmount}%`,
        rotateX: rotateXAmount,
        stagger: staggerAmount,
        ease: "power3.inOut",
        duration: 0.3,
        transformOrigin: "top",
      })
      .to(
        initialLetters,
        {
          y: 0,
          rotateX: 0,
          stagger: staggerAmount,
          ease: "power3.inOut",
          duration: 0.2,
        },
        "-=0.3"
      );
    //@ts-ignore
    hoverInTimeline.current = gsap.timeline({ paused: true });
    //@ts-ignore
    hoverInTimeline.current
      .to(initialLetters, {
        y: `-${yAmount}%`,
        rotateX: -rotateXAmount,
        stagger: staggerAmount,
        ease: "power3.inOut",
        duration: 0.3,
        transformOrigin: "bottom",
      })
      .to(
        hoverLetters,
        {
          y: 0,
          rotateX: 0,
          stagger: staggerAmount,
          ease: "power3.inOut",
          duration: 0.2,
        },
        "-=0.3"
      );

    if (isHovered) {
      //@ts-ignore
      hoverOutTimeline.current.pause();
      //@ts-ignore
      hoverInTimeline.current.play();
    } else {
      //@ts-ignore
      hoverInTimeline.current.pause();
      //@ts-ignore
      hoverOutTimeline.current.play();
    }
  }, [isHovered, index]);

  return (
    <li
      id={`menu-item-${index}`}
      className="flex flex-col overflow-hidden"
      style={{ perspective: 1000 }}
    >
      <div className="initial flex flex-row overflow-hidden !leading-[0.9]">
        {link.name.split("").map((letter: string, letterIndex: number) => (
          <span key={letterIndex} className="inline-block">
            {letter}
          </span>
        ))}
      </div>
      <div className="hover flex flex-row overflow-hidden absolute !leading-[0.9]">
        {link.name.split("").map((letter: string, letterIndex: number) => (
          <span
            key={letterIndex}
            className="inline-block"
            style={{ transform: "translateY(90%)" }}
          >
            {letter}
          </span>
        ))}
      </div>
    </li>
  );
};

export default LinkText;
