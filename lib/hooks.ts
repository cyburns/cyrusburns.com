import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export const shuffleLettersTwo = (e: any) => {
  let interval: NodeJS.Timeout | null = null;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  let iteration = 0;

  if (interval !== null) {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split("")
      .map((_: any, index: number) => {
        if (index < iteration) {
          return e.target.dataset.value[index];
        }

        return alphabet[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= e.target.dataset.value.length) {
      clearInterval(interval!);
      interval = null;
    }

    iteration += 1 / 3;
  }, 30);
};

export const shuffleLetters = (e: HTMLElement | any) => {
  const originalText = e.textContent;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let iteration = 0;

  const randomChar = () =>
    alphabet[Math.floor(Math.random() * alphabet.length)];

  const shuffle = () => {
    e.textContent = originalText
      .split("")
      .map((char: any) => (char === " " ? " " : randomChar()))
      .join("");
  };

  const restore = () => {
    e.textContent = originalText;
  };

  shuffle();
  const intervalId = setInterval(shuffle, 50);

  setTimeout(() => {
    clearInterval(intervalId);
    restore();
  }, 2500);
};
