"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import SplashScreen from "@/components/SplashScreen";
import { AnimatePresence } from "framer-motion";
import Works from "@/components/Works";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({});
    })();

    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <main className="-z-50 overflow-hidden max-w-[100%] bg-black">
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      <Hero />
    </main>
  );
}
